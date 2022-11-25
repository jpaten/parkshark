import {useState} from "react";
import {TextField, Typography} from "@mui/material";

export function NewListingForm () {
    const [addressState, setAddressState] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [addressPostalCode, setAddressPostalCode] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    console.log(addressPostalCode)
    return (
        <div>
            <form>
                <label>
                    <p>Description</p>
                    <TextField
                        name={"description"}
                        label={"Description"}
                        onChange={(event) => setDescription(event.target.value)}
                        multiline={true}
                    />
                </label>
                <label>
                    <p>Availability</p>
                    <p>Add calendar here</p>
                </label>
                <label>
                    <p>Address</p>
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
                </label>
                <label>
                    <Typography>Details</Typography>
                    <TextField
                        label={"Hourly Price"}
                        placeholder={10}
                        InputProps={{startAdornment: <p>$</p>}}/>
                        onChange={(event) => setPrice(event.target.value)}/>
                </label>
            </form>
        </div>
    )
}

export default NewListingForm;