require('dotenv').config()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        name: String,
        phone: String,
        dob: Date,
        email: String,
        bookings_id: [mongoose.Types.ObjectId],
        listings_id: [mongoose.Types.ObjectId]
    }
);

const listingSchema = new Schema(
    {
        location: {
           type: String,
           coordinates: [mongoose.Types.Decimal128, mongoose.Types.Decimal128]
        },
        userid: mongoose.Types.ObjectId,
        address: {
             state:String,
             city:String,
             postal_code:String,
             line_1:String,
             line_2:String
        },
        description:String,
        image:String,
        price:Number,
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
     }
);


const dbUrl = process.env.MONGODB_URL;
mongoose.connect(dbUrl, { useNewUrlParser : true,
    useUnifiedTopology: true }, function(error) {
        if (error) {
            console.log("Error!" + error);
        }
    });
console.log("Connected to DB");
const User = mongoose.model('User', userSchema);
const testUser = new User({
    name:"John Doe",
    phone:"310-666-666",
    dob: Date.now(),
    email:"doejohn@gmail.com",
    bookings_id:[],
    listings_id:[]
});

testUser.save().then(() => {
    console.log("Saved User Successfully")
}).catch((error) => {
    console.log("Error: ", error)
});

