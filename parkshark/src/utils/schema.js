const mongoose = require("mongoose");
mongoose.set('debug', true);
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        name: String,
        phone: String,
        dob: Date,
        email: String,
        host_bookings_id: [mongoose.Types.ObjectId],
        renter_bookings_id: [mongoose.Types.ObjectId],
        listings_id: [mongoose.Types.ObjectId]
    }
);

const listingSchema = new Schema(
    {
        location: {
           type: {type:String},
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
        bookings_id: [mongoose.Types.ObjectId],
        createdAt:Date,
        updatedAt:Date 
     }
);

const bookingSchema = new Schema(
  {
      renter_id:mongoose.Types.ObjectId,
      listing_id:mongoose.Types.ObjectId,
      host_id:mongoose.Types.ObjectId,
      time_interval:{
        start_time:Date,
        end_time:Date,
      },
      createdAt:Date,
      updatedAt:Date 
   }
);

const User = mongoose.model("User", userSchema, 'users');
const Listing = mongoose.model("Listing", listingSchema, 'listings');
const Booking = mongoose.model("Booking", bookingSchema, 'bookings');

module.exports = {User, Listing, Booking}