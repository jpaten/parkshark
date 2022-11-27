import React, {useEffect, useState} from 'react';
import BookingForm from "./bookingForm";
import {useParams} from "react-router-dom";

export function ListingPage() {

    const { id } = useParams();
    let apiData = {}
    const availability = [];
    let validatedId = "";


    useEffect(() => {
        fetch( `/listings/${id}`)
            .then((response) => response.json())
            .then((data) => {
                for(const i in data){
                    apiData[i] = data[i];
                }
                console.log(data);
            });
    }, []);


    return (
        <div>
            <BookingForm listid = {id}/>
        </div>

    );
}

export default ListingPage;
