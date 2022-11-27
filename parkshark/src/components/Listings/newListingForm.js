import {useState} from "react";
import {createMuiTheme, TextField, Typography} from "@mui/material";
import Calendar from "react-calendar";
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import "./newListingForm.css";
import fire from "../SignIn/fire";

const GOOGLE_KEY="TEST";

export function NewListing () {
    const [addressState, setAddressState] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [addressPostalCode, setAddressPostalCode] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [availabilityStartDate, setAvailabilityStartDate] = useState(new Date());
    const [availabilityEndDate, setAvailabilityEndDate] = useState(new Date());

    const [newId, setNewId] = useState("");
    const [doRedirect, setDoRedirect] = useState(false)

    const addListing = () => {

        const user = fire.auth().currentUser;

        const listingData = {
            address: {
                state: addressState,
                city: addressCity,
                postal_code: addressPostalCode,
                line_1: addressLine1,
                line_2: addressLine2,
            },
            availability: [{
                start_time: availabilityStartDate,
                end_time: availabilityEndDate
            }],
            description: description,
            image: "TEST",
            price: parseInt(price),
            location: {
                type: "Point",
                coordinates: [
                    1, 1
                ]
            },
        }
        const addressString = `${addressLine1} ${addressCity} ${addressState} ${addressPostalCode}`.replace(/ /g, "%20");
        const google_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addressString + "&key=" + GOOGLE_KEY;
        fetch(google_url)
            .then((googleResponse) => googleResponse.json())
            .then((googleData) => {
                if (googleData.results.length === 0) {
                    alert("Invalid address, please try again");
                } else {
                    let newListing = listingData;
                    const latitude = googleData.results[0].geometry.location.lat;
                    const longitude = googleData.results[0].geometry.location.lng;
                    newListing.location.coordinates = [longitude, latitude];
                    return newListing;
                }
            })
            .then((listingWithCoords) => {
                fetch(`/users/?email=${user.email}`)
                    .then((userResponse) => userResponse.json())
                    .then((userData) => {
                        let finalListing = listingWithCoords;
                        if (userData.length === 0) {
                            alert("Your account is not recognized. Please try to make a new one, then try again");
                        } else {
                            finalListing.userid = userData[0]._id;
                            return finalListing;
                        }
                    })
            .then((listingWithUser) => {
                console.log(listingWithUser);
                fetch("listings/",
                    {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(listingWithUser),
                    })
                    .then((newListingResponse) => newListingResponse.json())
                    .then((newListingData) => {
                        console.log("RESPONSE",newListingData);
                        setNewId(newListingData._id);
                        alert("Success! Redirecting you to your new spot!");
                        setDoRedirect(true);
                    });
            });
            });

    }


    if(newId !== "undefined" && doRedirect){
        return <Redirect to={`/listing/${newId}`}/>
    }

    return (
        <MainPanel1>
            <MainPanel2>
                <div style={{padding: 10}}>
                    <p style={{padding:10, fontSize: 25}}>Description</p>
                    <TextField
                        name={"description"}
                        label={"Description"}
                        onChange={(event) => setDescription(event.target.value)}
                        multiline={true}
                    />
                </div>
                <MainPanel3>
                    <p style={{fontSize: 25}}>Availability</p>
                    <div className="calendarBox">
                        <Calendar
                            className="calendar"
                            onChange={(value) => {
                                setAvailabilityStartDate(value[0]);
                                setAvailabilityEndDate(value[1]);
                            }}
                            selectRange={true}
                        />
                    </div>
                    <p style={{padding:10, fontSize: 25}}>Address</p>
                    <TextField
                        label={"Line 1"}
                        placeholder={"415 Portola Plaza"}
                        onChange={(event) => setAddressLine1(event.target.value)}/>
                    <TextField
                        label={"Line 2"}
                        placeholder={"A28"}
                        onChange={(event) => setAddressLine2(event.target.value)}/>
                    <TextField
                        label={"City"}
                        placeholder={"Los Angeles"}
                        onChange={(event) => setAddressCity(event.target.value)}/>
                    <TextField
                        label={"State"}
                        placeholder={"California"}
                        onChange={(event) => setAddressState(event.target.value)}/>
                    <TextField
                        label={"Zip Code"}
                        error={(isNaN(addressPostalCode) || (addressPostalCode.length !== 5 && addressPostalCode.length !== 0))}
                        placeholder={"90095"}
                        onChange={(event) => setAddressPostalCode(event.target.value)}/>
                </MainPanel3>
                <div>
                    <Typography style={{fontSize: 25}}>Details</Typography>
                    <TextField
                        label={"Hourly Price"}
                        placeholder={10}
                        InputProps={{startAdornment: <p>$</p>}}
                        onChange={(event) => setPrice(event.target.value)}/>
                </div>
                <div>
                <button className="book-button" onClick={addListing}>Add listing!</button>
                </div>
            </MainPanel2>
        </MainPanel1>
    )
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
  min-height: 1200px;
  background-color: white;
  border-radius: 25px;
`;

const MainPanel3 = styled.div`
  padding: 5% 5%;
  align-items: center;
  background-color: beige;
`;

export default NewListing;