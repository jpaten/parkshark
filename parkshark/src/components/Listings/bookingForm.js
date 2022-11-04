import {useState} from "react";
import Calendar from "react-calendar";
import './calendar.css'
import {value} from "firebase-tools/lib/deploymentTool";
//import {createBooking} from "../../utils/mongodb";
import {TextField} from "@mui/material";
//import {createBooking} from "../../utils/mongodb";


const LISTING_NAME = "907 Westwood Blvd";
const AVAILABLE = [[new Date(2022, 10, 3,), new Date(2022,10,4)]];

const USER_ID = 10;
const LISTING_ID = 2;
const LANDLORD_ID = 2;

export function BookingForm({listingName}) {

    const [name, setName] = useState(listingName);
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [arrivalTime, setArrivalTime] = useState("");
    const [departureDate, setDepartureDate] = useState(new Date());
    const [departureTime, setDepartureTime] = useState("");
    const [notes, setNotes] = useState("");
    const [hasBooked, setHasBooked] = useState(false);

    const isAvailable = (dateInfo) => {
        for (let i = 0; i < AVAILABLE.length; i++){
            if (AVAILABLE[i][0] <= dateInfo.date && dateInfo.date <= AVAILABLE[i][1]){
                return 0;
            }
        }
        return 1;

    }

    const submitBooking = () => {
        let splitArrivalTime = arrivalTime.split(":");
        arrivalDate.setHours(parseInt(splitArrivalTime[0]));
        arrivalDate.setMinutes(parseInt(splitArrivalTime[1]));
        let splitDepartureTime = departureTime.split(":");
        departureDate.setHours(parseInt(splitDepartureTime[0]));
        departureDate.setMinutes(parseInt(splitDepartureTime[1]));
        console.log(arrivalDate);
        /*createBooking({
            renter_id: USER_ID,
            listing_id: LISTING_ID,
            rentee_id: LANDLORD_ID,
            time_interval: {
                starttime: arrivalDate,
                endtime: departureDate,
            },
            createdAt: Date.now(),
            updatedAt: Date.now()
        })*/
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
                        <p>Date</p>
                        <Calendar
                            onChange={(value) => {
                                setArrivalDate(value[0]);
                                setDepartureDate(value[0]);
                            }}
                            tileDisabled={isAvailable}
                            selectRange={true}
                        />
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
                <h1>Thanks for booking {listingName}!</h1>
            </div>
        );
    }
}

export default BookingForm;