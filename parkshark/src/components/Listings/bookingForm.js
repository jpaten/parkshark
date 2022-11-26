import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import './calendar.css'
//import {createBooking} from "../../utils/mongodb";
import {Container, TextField} from "@mui/material";
//import {createBooking} from "../../utils/mongodb";
import Cookies from "js-cookie";
import {useParams} from "react-router-dom";


const LISTING_NAME = "907 Westwood Blvd";
const AVAILABLE = [[new Date(2022, 10, 3,), new Date(2022,10,4)]];

const USER_ID = 10;
const LISTING_ID = 2;
const LANDLORD_ID = 2;

export function BookingForm({listingName}) {

    let availability = [];

    const [name, setName] = useState(listingName);
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [arrivalTime, setArrivalTime] = useState("");
    const [departureDate, setDepartureDate] = useState(new Date());
    const [departureTime, setDepartureTime] = useState("");
    const [notes, setNotes] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [hasBooked, setHasBooked] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        fetch( `/listings/${id}`)
            .then((response) => response.json())
            .then((data) => {
                for(let datePair in data.availability){
                    let startDate = new Date(data.availability[datePair].start_time);
                    let endDate = new Date(data.availability[datePair].end_time);
                    availability.push([startDate, endDate])
                }
            });
        console.log(availability);


    })

    const isAvailable = (dateInfo) => {
        for (let i = 0; i < availability.length; i++){
            if (availability[i][0] <= dateInfo.date && dateInfo.date <= availability[i][1]){
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
        console.log(arrivalDate);

        let newBooking = {
            renter_id: Cookies.get("userID"),
            listing_id: LISTING_ID,
            rentee_id: LANDLORD_ID,
            time_interval: {
                starttime: arrivalDate,
                endtime: departureDate,
            },
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        fetch("/users", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking),
        })
            .then((response) => response.json())
            .then((data) => console.log(data)); // HANDLE ERRORS

        setHasBooked(true);
    }

    if(!hasBooked) {
        return (
            <div className={"booking-form-container"}>
                <form onSubmit={submitBooking}>
                    <label>
                        <p>Your Name</p>
                        <TextField
                            name={"name"}
                            onChange={(event) => setName(event.target.value)}/>
                    </label>
                    <label>
                        <Container>
                        <p>Date</p>
                        <Calendar
                            onChange={(value) => {
                                setArrivalDate(value[0]);
                                setDepartureDate(value[0]);
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
                <h1>Thanks for booking {listingName}! You have the spot from {new Intl.DateTimeFormat("en-US", {month: "long"}).format(arrivalDate)} {arrivalDate.getDay()} at {arrivalDate.toLocaleTimeString()} to {new Intl.DateTimeFormat("en-US", {month: "long"}).format(departureDate)} {departureDate.getDay()} at {departureDate.toLocaleTimeString()}</h1>
                <button onClick={() => setHasBooked(false)}>Cancel</button>
            </div>
        );
    }
}

export default BookingForm;