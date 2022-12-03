const path = require('path');
require("dotenv")
const db = require('../db/mongodb.js')
const User = require("../models/user")
const Listing = require("../models/listing")
const Booking = require("../models/booking");


var rawTestListing = {
    location:{
        type: "Point",
        coordinates: [0.0, 0.0]
    },
    userid: "",
    address: {
         state:"CA",
         city:"Los Angeles",
         postal_code:"90024",
         line_1:"UCLA Parking Structure 11",
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



var rawTestRenter = {
    name:"John Doe",
    phone:"310-666-666",
    dob: Date.now(),
    email:"doejohn@gmail.com",
    host_bookings_id: [],
    renter_bookings_id: [],
    listings_id:[]
}

const rawTestHost = {
    name:"Joe Shmoe",
    phone:"310-666-666",
    dob: Date.now(),
    email:"shmoejoe@gmail.com",
    host_bookings_id: [],
    renter_bookings_id: [],
    listings_id:[]
}

var rawTestBooking1 = {
  renter_id:"",
  listing_id: "",
  host_id:"",
  start_time:"2022-12-15",
  end_time:"2022-12-16",
  createdAt:"2022-11-2",
  updatedAt:"2022-11-2" 
}

const expectedAvail1 = [
    {
    start_time:new Date("2022-11-1"), 
    end_time:new Date("2022-11-30")
  },
  {
    start_time:new Date("2022-12-1"), 
    end_time:new Date("2022-12-15")
  },
  {
    start_time:new Date("2022-12-16"), 
    end_time:new Date("2022-12-30")
  }
]

var rawTestBooking2 = {
  renter_id:"",
  listing_id: "",
  host_id:"",
  start_time:"2022-12-01",
  end_time:"2022-12-02",
  createdAt:"2022-11-2",
  updatedAt:"2022-11-2" 
}

const expectedAvail2 = [
  {
  start_time:new Date("2022-11-1"), 
  end_time:new Date("2022-11-30")
},
{
  start_time:new Date("2022-12-2"), 
  end_time:new Date("2022-12-30")
}]

var rawTestBooking3 = {
  renter_id:"",
  listing_id: "",
  host_id:"",
  start_time:"2022-12-29",
  end_time:"2022-12-30",
  createdAt:"2022-11-2",
  updatedAt:"2022-11-2" 
}

const expectedAvail3 = [
  {
  start_time:new Date("2022-11-1"), 
  end_time:new Date("2022-11-30")
},
{
  start_time:new Date("2022-12-1"), 
  end_time:new Date("2022-12-29")
}]

async function setUpAddBooking(rawTestBooking){
  const renter = new User(rawTestRenter);
  const host = new User(rawTestHost);
  renterObj = await renter.save();
  hostObj = await host.save();

  rawTestListing.host_id = hostObj._id;
  rawTestListing.renter_id = renterObj._id;
  const listing = new Listing(rawTestListing); 
  listingObj = await listing.save();

  rawTestBooking.renter_id = renterObj._id;
  rawTestBooking.host_id = hostObj._id;
  rawTestBooking.listing_id = listingObj._id;

  bookingObj = db.addBooking(rawTestBooking)
  listingObj = await Listing.findById(listingObj._id);
  return {'hostObj':hostObj, 'renterObj':renterObj, 'bookingObj':bookingObj, 'listingObj':listingObj}
}

function tearDown(ctxt){
  for (const [key, value] of Object.entries(ctxt)) {
    value.remove();
  }
}

test('addBooking case 1', async () => {
    var hostObj = null, renterObj = null, listingObj = null, bookingObj = null;
    try{
      ctxt = setUpAddBooking(rawTestBooking1);
      expect(ctxt.bookingObj.renter_id).toBe(ctxt.renterObj._id) //Trivial tests 
      expect(ctxt.bookingObj.host_id).toBe(ctxt.hostObj._id)    
      expect(ctxt.listingObj.availability).toBe(expectedAvail1) //Main functionality test
    } finally { // CLEANUP
      tearDown(ctxt);
    }
  }
);

test('addBooking case 2', async () => {
  var hostObj = null, renterObj = null, listingObj = null, bookingObj = null;
  try{
    ctxt = setUpAddBooking(rawTestBooking2);
    expect(ctxt.bookingObj.renter_id).toBe(ctxt.renterObj._id) //Trivial tests 
    expect(ctxt.bookingObj.host_id).toBe(ctxt.hostObj._id)    
    expect(ctxt.listingObj.availability).toBe(expectedAvail2) //Main functionality test
  } finally { // CLEANUP
    tearDown(ctxt);
  }
}
);

test('addBooking case 3', async () => {
  var hostObj = null, renterObj = null, listingObj = null, bookingObj = null;
  try{
    ctxt = setUpAddBooking(rawTestBooking3);
    expect(ctxt.bookingObj.renter_id).toBe(ctxt.renterObj._id) //Trivial tests 
    expect(ctxt.bookingObj.host_id).toBe(ctxt.hostObj._id)    
    expect(ctxt.listingObj.availability).toBe(expectedAvail3) //Main functionality test
  } finally { // CLEANUP
    tearDown(ctxt);
  }
}
);

async function setUpRemoveBooking(rawTestBooking){
  const renter = new User(rawTestRenter);
  const host = new User(rawTestHost);
  renterObj = await renter.save();
  hostObj = await host.save();

  rawTestListing.host_id = hostObj._id;
  rawTestListing.renter_id = renterObj._id;
  const listing = new Listing(rawTestListing); 
  listingObj = await listing.save();

  rawTestBooking.renter_id = renterObj._id;
  rawTestBooking.host_id = hostObj._id;
  rawTestBooking.listing_id = listingObj._id;

  bookingObj = db.addBooking(rawTestBooking)
  db.removeBooking(rawTestBooking)
  listingObj = await Listing.findById(listingObj._id);
  return {'hostObj':hostObj, 'renterObj':renterObj, 'bookingObj':bookingObj, 'listingObj':listingObj}
}

test('removeBooking case 1', async () => {
  var hostObj = null, renterObj = null, listingObj = null, bookingObj = null;
  try{
    ctxt = setUpRemoveBooking(rawTestBooking1);
    expect(ctxt.bookingObj.renter_id).toBe(ctxt.renterObj._id) //Trivial tests 
    expect(ctxt.bookingObj.host_id).toBe(ctxt.hostObj._id)    
    expect(ctxt.listingObj.availability).toBe(rawTestListing.availability) //Main functionality test
  } finally { // CLEANUP
    tearDown(ctxt);
  }
}
);

test('removeBooking case 2', async () => {
  var hostObj = null, renterObj = null, listingObj = null, bookingObj = null;
  try{
    ctxt = setUpRemoveBooking(rawTestBooking2);
    expect(ctxt.bookingObj.renter_id).toBe(ctxt.renterObj._id) //Trivial tests 
    expect(ctxt.bookingObj.host_id).toBe(ctxt.hostObj._id)    
    expect(ctxt.listingObj.availability).toBe(rawTestListing.availability) //Main functionality test
  } finally { // CLEANUP
    tearDown(ctxt);
  }
}
);

test('removeBooking case 3', async () => {
  var hostObj = null, renterObj = null, listingObj = null, bookingObj = null;
  try{
    ctxt = setUpRemoveBooking(rawTestBooking3);
    expect(ctxt.bookingObj.renter_id).toBe(ctxt.renterObj._id) //Trivial tests 
    expect(ctxt.bookingObj.host_id).toBe(ctxt.hostObj._id)    
    expect(ctxt.listingObj.availability).toBe(rawTestListing.availability) //Main functionality test
  } finally { // CLEANUP
    tearDown(ctxt);
  }
}
);