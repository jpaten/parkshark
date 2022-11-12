const express = require("express")
const router = new express.Router()
const Booking = require("../models/booking")

// (C)

// (R) GET all bookings
router.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find({})
        res.send(bookings)
    } catch (e) {
        res.status(500).send(e)
    }
})

// (R) GET booking by ID
router.get('/bookings/:id', async (req, res) => {
    const _id = req.params.id // mongoose automatically converts string ids into ObjectIds
    try {
        const booking = await Booking.findById(_id)
        if (!booking) {
            return res.status(404).send()
        }
        res.send(booking)
    } catch (e) {
        res.status(500).send(e)
    }
})

// (U)

// (D)
router.delete('/bookings/:id', async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id)
        if (!booking) {
            return res.status(404).send()
        }
        res.send(booking)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router
