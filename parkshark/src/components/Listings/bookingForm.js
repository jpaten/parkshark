import React, {useEffect, useState} from "react";
import Calendar from "react-calendar";
import './calendar.css'
import {Container, TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import fire from "../SignIn/fire";
import styled from "styled-components";
import './bookingForm.css';
import GoogleMapReact from "google-map-react";
import Marker from "../Home/Marker.tsx";
import key from "../../keys.json";

export const BookingForm = (props) => {
    let listid = props.listid;
    const [availability, setAvailability] = useState([]);

    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [arrivalTime, setArrivalTime] = useState("");
    const [departureDate, setDepartureDate] = useState(new Date());
    const [departureTime, setDepartureTime] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [hasBooked, setHasBooked] = useState(false);

    const {id: listingId} = useParams();
    const [bookingId, setBookingId] = useState("");
    const [allListingBookings, setAllListingBookings] = useState([])

    const [listingUserId, setListingUserId] = useState("");
    const [viewingUserId, setViewingUserId] = useState("");
    const [hourlyPrice, setHourlyPrice] = useState(-1)
    const [timeDelta, setTimeDelta] = useState(-1)

    const dateOptions = {day: "2-digit", month: "long", year:"numeric"};
    const timeOptions = { hour: "2-digit", minute: "2-digit" };

    const [location, setLocation] = useState([]);


    useEffect(() => {
        const user = fire.auth().currentUser;

        // Get info about the current listing
        fetch(`/listings/${listingId}`)
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
                setAllListingBookings(data.bookings_id);
                setLocation([data.location.coordinates[1], data.location.coordinates[0]]);
            });

        //Get info about the current user
        fetch(`/users/?email=${user.email}`)
            .then((userResponse) => userResponse.json())
            .then((userData) => {
                if(userData.length > 0){
                    setViewingUserId(userData[0]._id);
                    console.log(userData[0]._id);
                }
            });
    }, []);

    useEffect( () => {
        // Check if current user has a booking
        fetch(`/users/${viewingUserId}`)
            .then((response) => response.json())
            .then((userData) => {
                for(let checkId in userData.renter_bookings_id){
                    if(allListingBookings.includes(userData.renter_bookings_id[checkId])){
                        return userData.renter_bookings_id[checkId];

                    }
                }
            })
            .then((foundBookingId) => {
                if(foundBookingId) {
                    fetch(`/bookings/${foundBookingId}`)
                        .then((bookingResponse) => bookingResponse.json())
                        .then((bookingData) => {
                            setArrivalDate(new Date(bookingData.start_time));
                            setDepartureDate(new Date(bookingData.end_time));
                            setBookingId(bookingData._id);
                            setHasBooked(true);
                            setHasSubmitted(true);
                        })
                }
            })
        ;
    }, [allListingBookings]);


    useEffect( () => {
        // Update arrival date
        if(arrivalTime !== ""){
            let splitArrivalTime = arrivalTime.split(":");
            arrivalDate.setHours(parseInt(splitArrivalTime[0]));
            arrivalDate.setMinutes(parseInt(splitArrivalTime[1]));
            arrivalDate.setSeconds(0);
        }
        setTimeDelta(departureDate.getTime()-arrivalDate.getTime()-330)
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
    }, [departureTime, departureDate]);



    const isAvailable = ({activeStartDate, date, view}) => {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        for (let i = 0; i < availability.length; i++){
            const minimizedStartDate = availability[i][0];
            minimizedStartDate.setHours(0);
            minimizedStartDate.setMinutes(0);
            minimizedStartDate.setSeconds(0);
            const minimizedEndDate = availability[i][1];
            minimizedEndDate.setHours(0);
            minimizedEndDate.setMinutes(0);
            minimizedEndDate.setSeconds(0);
            if (minimizedStartDate <= date && date < minimizedEndDate){
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
        if(isNaN(arrivalDate.getDay())
            || isNaN(departureDate.getDay())
            || arrivalTime === ""
            || departureTime === ""
            || ( arrivalDate > departureDate))
        {
            // BAD SUBMISSION
            setHasSubmitted(true)
            alert("Make sure your arrival time is after your departure time, and that both are filled out");
        }
        else {

            for(let i in availability){
                if(!(availability[i][0]  < arrivalDate < departureDate < availability[i][1])){
                    alert("Unfortunately, there is already a booking at this time.")
                }
            }

            let newBooking = {
                renter_id: viewingUserId,
                host_id: listingUserId,
                listing_id: listingId,
                start_time: arrivalDate,
                end_time: departureDate,
            };
            fetch("/bookings", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newBooking),
            })
                .then((response) => response.json())
                .then((data) => {
                        setBookingId(data._id);
                        setHasSubmitted(true);
                        setHasBooked(true);

                    }
                );// HANDLE ERRORS

        }
    }

    const cancelBooking = () => {
        fetch(`/bookings/${bookingId}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                setHasBooked(false);
                setHasSubmitted(false);
            });
    }

    const viewBookingButton = () => {
        if (listingUserId === viewingUserId) {
            const link = "http://localhost:3000/Bookings/" + listid;

            return (
                <a href={link}>
                    <button className="book-button1">
                        View Current Bookings
                    </button>
                </a>
            )
        }
    }

    if(!hasBooked) {
        return (
            <MainPanel1>
                <MainPanel2>
                        <MainPanel3>
                            <p style={{fontSize: 25, padding: 5}}>Create a New Booking</p>
                            <div style={{ height: "30vh", width: "100%", margin: "2vh" }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: key["key"] }}
                                defaultCenter={{
                                    lat: 34.05,
                                    lng: 241.61502627,
                                }}
                                defaultZoom={11}
                            >
                                <Marker
                                    onClick={(marker) => {}}
                                    lat={location[0]}
                                    lng={location[1]}
                                    name={"bob"}/>

                            </GoogleMapReact>
                            </div>
                            {viewBookingButton()}
                            <p style={{fontSize: 25, padding: 5}}>Select Dates:</p>
                            <Calendar
                                className="calendar"
                                onChange={(value) => {
                                    setArrivalDate(value[0]);
                                    setDepartureDate(value[1]);
                                }}
                                tileDisabled={isAvailable}
                                selectRange={true}
                            />
                        </MainPanel3>
                        <div>
                            <p style={{fontSize: 25, padding: 5}}>Arrival Time</p>
                            <TextField
                                type={"time"}
                                name={"arrivalTime"}
                                error={isInError(arrivalTime)}
                                onChange={(event) => setArrivalTime(event.target.value)}/>
                            <p style={{fontSize: 25, padding: 5}}>Departure time</p>
                            <TextField
                                type={"time"}
                                name={"departureTime"}
                                error={isInError(departureTime)}
                                onChange={(event) => setDepartureTime(event.target.value)}/>
                        </div>
                        <div style={{fontSize: 18, padding: 5}}>
                            {priceLine()}
                        </div>
                        <div className="align-center">
                            <button className="book-button1" onClick={submitBooking}>Book!</button>
                        </div>
                </MainPanel2>
            </MainPanel1>
        )
    }
    else{
        return(
            <MainPanel1>
                <MainPanel2>
                    <h1 style={{fontSize: 25, padding: 5, margin: 10}}>Thanks for booking! You have the spot from&nbsp;
                        {new Intl.DateTimeFormat("en-US", dateOptions).format(arrivalDate)} at {arrivalDate.toLocaleTimeString("en-US", timeOptions)}&nbsp;
                        to {new Intl.DateTimeFormat("en-US", dateOptions).format(departureDate)} at {departureDate.toLocaleTimeString("en-US", timeOptions)}.&nbsp;
                    </h1>
                    <h1 style={{fontSize: 25, padding: 5, margin: 10}}>
                        We'll hand things off to the owner of the spot now, who should email you about it shortly. Please contact us at parkshark@example.com if they don't get back to you, and provide your booking number {bookingId} so we can help!
                    </h1>
                    <button className="book-button2" onClick={cancelBooking}>Cancel</button>
                </MainPanel2>
            </MainPanel1>
        );
    }
}

const MainPanel1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5% 5%;
    align-items: center;
    min-height: 1500px;
    background-color: grey;
  `;

  const MainPanel2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 5%;
  align-items: center;
  min-height: 1000px;
  background-color: white;
  border-radius: 25px;
  max-width: 70%;
  min-width: 60%;
`;

const MainPanel3 = styled.div`
  padding-left: 12%;
  padding-right: 12%;
  padding-top: 6%;
  padding-bottom: 6%;
  min-width: 800px;
  align-items: center;
  background-color: rgba(189,195,199);
`;

export default BookingForm;