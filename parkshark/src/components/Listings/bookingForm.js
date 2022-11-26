import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import './calendar.css'
//import {createBooking} from "../../utils/mongodb";
import {Container, TextField} from "@mui/material";
//import {createBooking} from "../../utils/mongodb";
import Cookies from "js-cookie";
import {useParams} from "react-router-dom";



const USER_ID = "6361cd507f98f5c0249b249a";
const LISTING_ID = 2;
const LANDLORD_ID = 2;

export function BookingForm() {


    let [availability, setAvailability] = useState([]);

    const [name, setName] = useState("");
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [arrivalTime, setArrivalTime] = useState("");
    const [departureDate, setDepartureDate] = useState(new Date());
    const [departureTime, setDepartureTime] = useState("");
    const [notes, setNotes] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [hasBooked, setHasBooked] = useState(false);

    const {id} = useParams();
    let [listingUserId, setListingUserId] = useState("");

   useEffect(() => {
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
                    //setListingUserId(data.userid);
                });
   }, []);


    const isAvailable = ({activeStartDate, date, view}) => {
        console.log(availability);
        for (let i = 0; i < availability.length; i++){
            if (availability[i][0] <= date && date <= availability[i][1]){
                return 0;
            }
        }
        return 1;

    }

    const submitBooking = () => {
        if(name === "" || isNaN(arrivalDate.getDay()) || isNaN(departureDate.getDay()) || ( arrivalDate > departureDate)){
            // BAD SUBMISSION
            setHasSubmitted(true)
            return;
        }
        let splitArrivalTime = arrivalTime.split(":");
        arrivalDate.setHours(parseInt(splitArrivalTime[0]));
        arrivalDate.setMinutes(parseInt(splitArrivalTime[1]));
        let splitDepartureTime = departureTime.split(":");
        departureDate.setHours(parseInt(splitDepartureTime[0]));
        departureDate.setMinutes(parseInt(splitDepartureTime[1]));

        let newBooking = {
            renter_id: id,
            host_id: "636488383f7d443468218b01",
            listing_id: id,
            start_time: arrivalDate,
            end_time: departureDate,
        };

        fetch("/bookings", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
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

    if(!hasBooked) {
        return (
            <div className={"booking-form-container"}>
                <h1>Let's book {listingUserId[0]}</h1>
                <form onSubmit={submitBooking}>
                    <label>
                        <Container>
                        <p>Date</p>
                        <Calendar
                            onChange={(value) => {
                                setArrivalDate(value);
                                setDepartureDate(value);
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
                            onChange={(event) => setArrivalTime(event.target.value)}/>
                        <p>Departure time</p>
                        <TextField
                            type={"time"}
                            name={"departureTime"}
                            onChange={(event) => setDepartureTime(event.target.value)}/>
                    </label>
                    <label>
                        <p>Any notes?</p>
                        <TextField
                            name={"notes"}
                            onChange={(event) => setNotes(event.target.value)}/>
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
                <h1>Thanks for booking! You have the spot from {new Intl.DateTimeFormat("en-US", {month: "long"}).format(arrivalDate)} {arrivalDate.getDay()} at {arrivalDate.toLocaleTimeString()} to {new Intl.DateTimeFormat("en-US", {month: "long"}).format(departureDate)} {departureDate.getDay()} at {departureDate.toLocaleTimeString()}</h1>
                <button onClick={() => setHasBooked(false)}>Cancel</button>
            </div>
        );
    }
}

export default BookingForm;