//############### CLUSTER 1 : 600s Kelton ###############
const listing1 = {
    location: {
       type: "Point",
       coordinates: [34.06546359476677, -118.45340914472904]
    },
    userid: "",
    address: {
         state: "CA",
         city: "Los Angeles",
         postal_code: "90024",
         line_1: "631 Kelton Ave",
         line_2: "Spot 301"
    },
    description: "Insert description here",
    image: "./image.jpg",
    price: 300,
    availability:[
        {
            start_time: "2022-01-01", 
            end_time: "2022-03-01"
        }
    ],
    bookings_id: [],
    createdAt: "2022-01-01",
    updatedAt: "2022-01-01", 
}

const listing2 = {
    location: {
       type: "Point",
       coordinates: [34.06576285930431, -118.45350794252079]
    },
    userid: "",
    address: {
         state: "CA",
         city: "Los Angeles",
         postal_code: "90024",
         line_1: "623 Kelton Ave",
         line_2: "Spot 102"
    },
    description: "Insert description here",
    image: "./image.jpg",
    price: 250,
    availability:[
        {
            start_time: "2022-01-01", 
            end_time: "2022-03-01"
        },
        {
            start_time: "2022-05-01", 
            end_time: "2022-08-01"
        }
    ],
    bookings_id: [],
    createdAt: "2022-01-01",
    updatedAt: "2022-01-01", 
}

const listing3 = {
    location: {
       type: "Point",
       coordinates: [34.06511536376486, -118.4528435637836]
    },
    userid: "",
    address: {
         state: "CA",
         city: "Los Angeles",
         postal_code: "90024",
         line_1: "655 Kelton Ave",
         line_2: "Spot 21"
    },
    description: "Insert description here",
    image: "./image.jpg",
    price: 300,
    availability:[
        {
            start_time: "2022-02-01", 
            end_time: "2022-03-01"
        },
        {
            start_time: "2022-05-01", 
            end_time: "2022-07-01"
        },
        {
            start_time: "2022-09-01", 
            end_time: "2022-10-01"
        }
    ],
    bookings_id: [],
    createdAt: "2022-02-01",
    updatedAt: "2022-02-15", 
}

//############### CLUSTER 2 : 600s Landfair ###############
const listing4 = {
    location: {
       type: "Point",
       coordinates: [34.06671568990563, -118.44854415309017]
    },
    userid: "",
    address: {
         state: "CA",
         city: "Los Angeles",
         postal_code: "90024",
         line_1: "638 Landfair Ave",
         line_2: "Spot 34A"
    },
    description: "Insert description here",
    image: "./image.jpg",
    price: 100,
    availability:[
        {
            start_time: "2022-05-01", 
            end_time: "2022-07-01"
        },
        {
            start_time: "2022-09-01", 
            end_time: "2022-10-01"
        }
    ],
    bookings_id: [],
    createdAt: "2022-05-01",
    updatedAt: "2022-06-15", 
}

const listing5 = {
    location: {
       type: "Point",
       coordinates: [34.066927768906304, -118.4485563442828]
    },
    userid: "",
    address: {
         state: "CA",
         city: "Los Angeles",
         postal_code: "90024",
         line_1: "626 Landfair Ave",
         line_2: "Spot 2"
    },
    description: "Insert description here",
    image: "./image.jpg",
    price: 300,
    availability:[
        {
            start_time: "2022-02-01", 
            end_time: "2022-03-01"
        },
        {
            start_time: "2022-10-01", 
            end_time: "2022-12-01"
        }
    ],
    bookings_id: [],
    createdAt: "2022-02-01",
    updatedAt: "2022-09-15", 
}

const listing6 = {
    location: {
       type: "Point",
       coordinates: [34.06641398136489, -118.44911713914429]
    },
    userid: "",
    address: {
         state: "CA",
         city: "Los Angeles",
         postal_code: "90024",
         line_1: "625 Landfair Ave",
         line_2: "Spot M"
    },
    description: "Insert description here",
    image: "./image.jpg",
    price: 300,
    availability:[
        {
            start_time: "2022-02-01", 
            end_time: "2022-03-01"
        }
    ],
    bookings_id: [],
    createdAt: "2022-02-01",
    updatedAt: "2022-02-15", 
}

module.exports = {listing1, listing2}