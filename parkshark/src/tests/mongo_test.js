const db = require('../utils/mongodb.js')




// ********************************************************************
// test data

const rawTestUser = {
    name:"John Doe",
    phone:"310-666-666",
    dob: Date.now(),
    email:"doejohn@gmail.com",
    rentee_bookings_id: [],
    renter_bookings_id: [],
    listings_id:[]
}

const rawTestUser2 = {
    name:"James DiFranco",
    phone:"310-666-555",
    dob: Date.now(),
    email:"difranco@gmail.com",
    rentee_bookings_id: [],
    renter_bookings_id: [],
    listings_id:[]
}
//createUser(rawTestUser);

var rawTestBooking =   {
    renter_id:"6361cd507f98f5c0249b249a",
    listing_id:"63638d13dbbb6ba05b4595b0",
    rentee_id:"63637f1a20e5965e10489bb1",
    start_time:"2022-12-3",
    end_time:"2022-12-5",
    createdAt:"2022-11-2",
    updatedAt:"2022-11-2" 
 }

//createBooking(rawTestBooking);
//addBooking(rawTestBooking);

const rawTestListing = {
    location:{
        type: "Point",
        coordinates: [0.0, 0.0]
    },
    userid: "6361cd507f98f5c0249b249a",
    address: {
         state:"CA",
         city:"Los Angeles",
         postal_code:"90024",
         line_1:"UCLA Parking Structure 7",
         line_2:""
    },
    description:"Parking",
    image:"",
    price:20,
    availability:[
        {
        start_time:new Date("2022-11-1"), 
        end_time:new Date("2022-11-30")
      },
      {
        start_time:new Date("2022-12-1"), 
        end_time:new Date("2022-12-30")
      }
    ],
    bookings_id: [],
    createdAt: new Date("2022-11-1"),
    updatedAt: new Date("2022-11-1")
 }

//db.createListing(rawTestListing);
//listingId = "636334de410b92fcada064ac";
//bookingId = 
//addBookingToListing(listingId, bookingId);
db.addBooking(rawTestBooking);

