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

module.exports = userSchema, listingSchema