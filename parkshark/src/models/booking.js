const mongoose = require("mongoose");
mongoose.set('debug', true);
const Schema = mongoose.Schema;

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

const Booking = mongoose.model("Booking", bookingSchema, 'bookings');

module.exports = Booking