require('dotenv').config()
const mongoose = require("mongoose");
const schemas = require('./mongoose.js')

const listingSchema = schemas.listingSchema
const bookingSchema = schemas.bookingSchema
const userSchema = schemas.userSchema

const dbUrl = process.env.MONGODB_URL;
const userDBName = "users"
const listingDBName = "listings"
const bookingDBName = "bookings"


mongoose.connect(dbUrl, { useNewUrlParser : true,
    useUnifiedTopology: true }, function(error) {
        if (error) {
            return console.log("Error!" + error);
        }
        console.log("Connected to DB"); 
    }
)
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

// ********************************************************************
// User API

function createUser(name, phone, dob, email){
    const User = mongoose.model(userDBName, userSchema);
    const user = new User({
        name: name,
        phone: phone,
        dob: dob,
        email: email,
        bookings_id: [],
        listings_id: []
    });

    user.save().then(() => {
        console.log("Saved User Successfully");
    }).catch((error) => {
        console.log("Error: ", error);
    });
}

/*
function createUser(userData){
    const user = new User(userData);
    user.save()
}  
*/

function queryUser(user_id) {
    return User.findById(user_id);
}

function removeUser() {
    return;
}

function updateUser() {
    return;
}    

// ********************************************************************
// Listing API

function addListing(location, id, address, desc, image, price) {
    const Listing = mongoose.model(listingDBName, listingSchema);
    const listing = new Listing({
        location: location,
        userid: id,
        address: address,
        description: desc,
        image: image,
        price: price,
        availability:[
            {
            start_time:Date, 
            end_time:Date
          }
        ],
        bookings_id: [mongoose.Types.ObjectId],
        createdAt:Date,
        updatedAt:Date 
     }
)}


// ********************************************************************
// Booking API

function addBooking() {
    const Booking = mongoose.model(bookingDBName, bookingSchema);
// update listing in listings collection

// add booking to bookings collection

// add booking id to user document via user id

}