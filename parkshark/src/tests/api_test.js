/*
POST 
GET
PATCH
DELETE
*/

const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

function merge(intervals, newInterval) {  
    const newIntervals = [];
    var i1 = -1
    var i2 = -1
    
    for (var i = 0; i < intervals.length; i++) {
        // newIntervals is empty or no overlap between last interval in newIntervals and curr interval
        if (intervals[i].end_time == newInterval.start_time) {
            i1 = i;
            continue;
        }
        if (intervals[i].start_time == newInterval.end_time) {
            i2 = i
            continue;
        }
        newIntervals.push(intervals[i])
    }
    if (i1 != -1 && i2 != -1) {
        t1 = intervals[i1].start_time
        t2 = intervals[i2].end_time
    } else if (i1 != -1) {
        t1 = intervals[i1].start_time
        t2 = newInterval.end_time
    } else if (i2 != -1) {
        t1 = newInterval.start_time
        t2 = intervals[i2].end_time
    } else {
        t1 = newInterval.start_time
        t2 = newInterval.end_time
    }
    newIntervals.push({"start_time": t1, "end_time": t2, "_id": new ObjectId()})
    return newIntervals;
};

const intervalsO = [
    {
        "start_time": "2022-02-01T00:00:00.000Z",
        "end_time": "2022-03-01T00:00:00.000Z",
        "_id": "6371e508694853109e03799f"
    },
    {
        "start_time": "2022-05-01T00:00:00.000Z",
        "end_time": "2022-07-01T00:00:00.000Z",
        "_id": "6371e508694853109e0379a0"
    },
    {
        "start_time": "2022-09-01T00:00:00.000Z",
        "end_time": "2022-09-20T07:00:00.000Z",
        "_id": "638318caa5c9931b45443479"
    },
    {
        "start_time": "2022-09-30T09:00:00.000Z",
        "end_time": "2022-10-01T00:00:00.000Z",
        "_id": "638318caa5c9931b4544347a"
    }
]

var intervals = [
    {
        "start_time": "2022-02-01T00:00:00.000Z",
        "end_time": "2022-03-01T00:00:00.000Z",
        "_id": "6371e508694853109e03799f"
    },
    {
        "start_time": "2022-05-01T00:00:00.000Z",
        "end_time": "2022-07-01T00:00:00.000Z",
        "_id": "6371e508694853109e0379a0"
    },
    {
        "start_time": "2022-09-01T00:00:00.000Z",
        "end_time": "2022-09-20T07:00:00.000Z",
        "_id": "638318caa5c9931b45443479"
    },
    {
        "start_time": "2022-09-30T09:00:00.000Z",
        "end_time": "2022-10-01T00:00:00.000Z",
        "_id": "638318caa5c9931b4544347a"
    }
]

var newInterval = {
    "start_time": "2022-09-20T07:00:00.000Z",
    "end_time": "2022-09-30T09:00:00.000Z",
}

const i = merge(intervals, newInterval);
console.log(i)