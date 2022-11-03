require('dotenv').config()
const mongoose = require("mongoose")
const schemas = require('./mongoose.js')
const ObjectId = mongoose.Types.ObjectId

const Listing = schemas.Listing
const Booking = schemas.Booking
const User = schemas.User

const databaseName = "cs130test"
const dbUrl = "mongodb://127.0.0.1:27017/" + databaseName;
// const userDBName = "users"
// const listingDBName = "listings"
// const bookingDBName = "bookings"

mongoose.connect(dbUrl, { useNewUrlParser : true,
    useUnifiedTopology: true }, function(error) {
        if (error) {
            return console.log("Error!" + error);
        }
        console.log("Connected to DB");
    }
)

// ********************************************************************
// User API
function createUser(userData){
    const user = new User(userData);
    user.save().then(() => {
        console.log("Saved user successfully");
    }).catch((error) => {
        console.log("Error: ", error);
    });
}

function queryUser(userId) {
    return User.findById(userId);
}

function removeUser(userId) {
    return;
}

function updateUser(userId) {
    return;
}    

function addBookingIdToUser(bookingId, renterId) {
    User.findOneAndUpdate({"_id": renterId},
        {$push: {bookings_id: [bookingId]} }, null, (err, docs) => {
            if (err) {
                return console.log("Error: " + err);
            }
            console.log("Original doc: " + docs)
        })
}

// ********************************************************************
// Listing API

function createListing(listingData) {
    const listing = new Listing(listingData);
    listing.save().then(() => {
        console.log("Saved listing successfully");
    }).catch((error) => {
        console.log("Error: ", error);
    });

}

function addBookingIdToListing(listingId, bookingId) {
    console.log(listingId)
    Listing.findOneAndUpdate({"_id": listingId},
        {$push: {bookings_id: [bookingId]}}, null, (err, docs) => {
            if (err) {
                return console.log("Error: " + err);
            }
            console.log("Original doc: " + docs)
        })
}


// ********************************************************************
// Booking API
const createBooking = (bookingData) => {
    const booking = new Booking(bookingData);
    booking.save().then(() => {
        console.log("Saved booking successfully");
    }).catch((error) => {
        console.log("Error: ", error);
    });
}

function addBooking(bookingData) {
    const listingId = bookingData.listing_id
    const renterId = bookingData.renter_id
    const bookingId = bookingData._id
    createBooking(bookingData);
    addBookingIdToListing(listingId, bookingId);
    addBookingIdToUser(bookingId, renterId);
}


// ********************************************************************
// test data
const testUser = new User({
    name:"John Doe",
    phone:"310-666-666",
    dob: Date.now(),
    email:"doejohn@gmail.com",
    bookings_id:[],
    listings_id:[]
});

const rawTestUser = {
    name:"John Doe",
    phone:"310-666-666",
    dob: Date.now(),
    email:"doejohn@gmail.com",
    bookings_id:[],
    listings_id:[]
}

//createUser(rawTestUser);

const rawTestBooking =   {
    _id:ObjectId(1),
    renter_id:ObjectId("63632728555c56142ba38d01"),
    listing_id:ObjectId("636334de410b92fcada064ac"),
    rentee_id:ObjectId("636329b3dc514e1d53164c43"),
    starttime:"2022-11-5",
    endtime:"2022-11-6",
    createdAt:"2022-11-2",
    updatedAt:"2022-11-2" 
 }

//createBooking(rawTestBooking);
//addBooking(rawTestBooking);

const rawTestListing = {
    location: "",
    userid: "63632728555c56142ba38d01",
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
        start_time:"2022-11-2", 
        end_time:"2022-11-29"
      }
    ],
    bookings_id: [],
    createdAt: "2022-11-2",
    updatedAt: "2022-11-2"
 }

//createListing(rawTestListing);
//listingId = "636334de410b92fcada064ac";
//bookingId = 
//addBookingToListing(listingId, bookingId);