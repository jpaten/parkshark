import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import './calendar.css'
import {Container, TextField} from "@mui/material";
import Cookies from "js-cookie";
import {useParams} from "react-router-dom";



const USER_ID = "6361cd507f98f5c0249b249a";

export function BookingForm() {


    let [availability, setAvailability] = useState([]);

    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [arrivalTime, setArrivalTime] = useState("");
    const [departureDate, setDepartureDate] = useState(new Date());
    const [departureTime, setDepartureTime] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [hasBooked, setHasBooked] = useState(false);

    const {id} = useParams();
    const [listingUserId, setListingUserId] = useState("");
    const [hourlyPrice, setHourlyPrice] = useState(-1)
    const [timeDelta, setTimeDelta] = useState(-1)

    const dateOptions = {day: "2-digit", month: "long", year:"numeric"};
    const timeOptions = { hour: "2-digit", minute: "2-digit" };


   useEffect(() => {
       // Get info about the current listing
        fetch(`/listings/${id}`)
            .then((response) => response.json())
            .then((data) => {
                const newAvailability = [];
                for (let datePair in data.availability) {
                    let startDate = new Date(data.availability[datePair].start_time);
                    let endDate = new Date(data.availability[datePair].end_time);
                    newAvailability.push([startDate, endDate])
                }
                setAvailability(newAvailability);
                setListingUserId(data.userid);
                setHourlyPrice(data.price);
            });
   }, []);

   useEffect( () => {
       // Update arrival date
       if(arrivalTime !== ""){
           let splitArrivalTime = arrivalTime.split(":");
           arrivalDate.setHours(parseInt(splitArrivalTime[0]));
           arrivalDate.setMinutes(parseInt(splitArrivalTime[1]));
           arrivalDate.setSeconds(0);
       }
       setTimeDelta(departureDate.getTime()-arrivalDate.getTime()-330)
       console.log("ArrivalDate", arrivalDate, timeDelta/1000)
   }, [arrivalTime, arrivalDate]);

   useEffect( () => {
       // Update departure date
       if(departureTime !== ""){
           let splitDepartureTime = departureTime.split(":");
           departureDate.setHours(parseInt(splitDepartureTime[0]));
           departureDate.setMinutes(parseInt(splitDepartureTime[1]));
           departureDate.setSeconds(0);
       }
       setTimeDelta(departureDate.getTime()-arrivalDate.getTime()-330)
       console.log("DepartureDate", departureDate, timeDelta/1000)
   }, [departureTime, departureDate]);



    const isAvailable = ({activeStartDate, date, view}) => {
        for (let i = 0; i < availability.length; i++){
            if (availability[i][0] <= date && date <= availability[i][1]){
                return 0;
            }
        }
        return 1;

    }

    const isInError = (fieldBody) => hasSubmitted && (fieldBody === "");

    const priceLine = () => {
        if(timeDelta > 0 && arrivalTime !== "" && departureTime !== "") {
            return (
                <p>Price: ${Math.round(((timeDelta / 3600000.0 * hourlyPrice) + Number.EPSILON)*100)/100}</p>
            );
        } else {
            return (
                <p>Enter a valid set of dates to determine the price</p>
            );
        }
    }
    const submitBooking = () => {
        console.log(arrivalDate);
        if(isNaN(arrivalDate.getDay())
            || isNaN(departureDate.getDay())
            || arrivalTime === ""
            || departureTime === ""
            || ( arrivalDate > departureDate))
        {
            // BAD SUBMISSION
            setHasSubmitted(true)
        }
        else {
            console.log("hi!")

            let newBooking = {
                renter_id: USER_ID,
                host_id: listingUserId,
                listing_id: id,
                start_time: arrivalDate,
                end_time: departureDate,
            };
            console.log(JSON.stringify((newBooking)));
            fetch("/bookings", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newBooking),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setHasSubmitted(true);
                    setHasBooked(true);

                    }
                );// HANDLE ERRORS

        }
    }

    const cancelBooking = () => {
        fetch(`/bookings/{${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setHasBooked(false);
                setHasSubmitted(false);
            });
    }

    if(!hasBooked) {
        return (
            <div className={"booking-form-container"}>
                <button onClick={submitBooking}>Hi</button>
                <form onSubmit={submitBooking}>
                    <label>
                        <Container>
                        <p>Date</p>
                        <Calendar
                            onChange={(value) => {
                                setArrivalDate(value[0]);
                                setDepartureDate(value[1]);
                            }}
                            tileDisabled={isAvailable}
                            selectRange={true}
                        />
                        </Container>
                    </label>
                    <label>
                        <p>Arrival Time</p>
                        <TextField
                            type={"time"}
                            name={"arrivalTime"}
                            error={isInError(arrivalTime)}
                            onChange={(event) => setArrivalTime(event.target.value)}/>
                        <p>Departure time</p>
                        <TextField
                            type={"time"}
                            name={"departureTime"}
                            error={isInError(departureTime)}
                            onChange={(event) => setDepartureTime(event.target.value)}/>
                    </label>
                    <label>
                        <p>Placeholder for submission error</p>
                    </label>
                    <label>
                        {priceLine()}
                    </label>
                    <label>
                        <button type={"submit"}>Book!</button>
                    </label>
                </form>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Thanks for booking! You have the spot from&nbsp;
                    {new Intl.DateTimeFormat("en-US", dateOptions).format(arrivalDate)} at {arrivalDate.toLocaleTimeString("en-US", timeOptions)}&nbsp;
                    to {new Intl.DateTimeFormat("en-US", dateOptions).format(departureDate)} at {departureDate.toLocaleTimeString("en-US", timeOptions)}
                </h1>
                <button onClick={cancelBooking}>Cancel</button>
            </div>
        );
    }
}

export default BookingForm;