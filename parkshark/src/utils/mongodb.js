require('dotenv').config()

const userSchema = require('./mongoose.js')
const listingSchema = require('./mongoose.js')

const dbUrl = process.env.MONGODB_URL;
const DBconnect = mongoose.connect(dbUrl, { useNewUrlParser : true,
    useUnifiedTopology: true }, function(error) {
        if (error) {
            return console.log("Error!" + error);
        }
        console.log("Connected to DB"); 
    });
//*********************************************************************
const testUser = new User({
    name:"John Doe",
    phone:"310-666-666",
    dob: Date.now(),
    email:"doejohn@gmail.com",
    bookings_id:[],
    listings_id:[]
});

// add user
const addUser = (name, phone, dob, email) => {
    const User = mongoose.model('users', userSchema);
    const user = new User({
        name: name,
        phone: phone,
        dob: dob,
        email: email,
        bookings_id: [],
        listings_id: []
    });
    user.save().then(() => {
        console.log("Saved User Successfully")
    }).catch((error) => {
        console.log("Error: ", error)
    });
}

// remove user
const removeUser = () => {
    return;
}

// edit user

const updateUser = () => {
    return;
}    

// add listing
const addListing = (location, id, address, desc, image, price) => {
    const Listing = mongoose.model('listings', userSchema);
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
        bookings: [
            {
            _id:mongoose.Types.ObjectId,
            rentee_id:mongoose.Types.ObjectId,
            starttime:Date,
            endtime:Date,
            createdAt:Date,
            updatedAt:Date
          }
        ],
        createdAt:Date,
        updatedAt:Date 
     });
    user.save().then(() => {
        console.log("Saved User Successfully")
    }).catch((error) => {
        console.log("Error: ", error)
    });
}

// remove listing
const removeListing = () => {

}

// edit listing
const editListing = () => {

}
// search for listings by radius/availability

// update listing after booking has been made
const makeBooking = (listing_id, user_id, ) => {

}
