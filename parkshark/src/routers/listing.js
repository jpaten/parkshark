const express = require("express")
const router = new express.Router()
const Listing = require("../models/listing")

// (C)
router.post('/listings', async (req, res) => {
    const listing = new Listing(req.body)
    try {
        await listing.save()
        res.status(201).send(listing)
    } catch (e) {
        res.status(400).send(e)
    }
})

// (R) GET listings /listings?long=dec&lat=dec&host_id=string&price_lo=dec&price_hi=dec&starttime=t1&endtime=t2
// Filter listings by location (long, lat), time availability, host (?), price range
router.get('/listings', async (req, res) => {
    const match = {}

    if (req.query.long && req.query.lat) {
        match.longitude = req.query.long
        match.latitude = req.query.lat
    }
    if (req.query.host_id) {
        match.host_id = req.query.host_id
    }
    const price_lo = -1
    if (req.query.price_lo) {
        price_lo = req.query.price_lo
        match.price = { $gte: price_lo }
    }
    const price_hi = Infinity
    if (req.query.price_hi) {
        price_hi = req.query.price_hi
        if (match.price) {
            match.price[$lte] = price_hi
        } else {
            match.price = { $lte: price_hi }
        }
    }
    const starttime = req.query.starttime
    const endtime = req.query.endtime
    // TODO: search function

    try {
        const listings = await Listing.find({
            match
        })
        res.send(listings)
    } catch (e) {
        res.status(500).send(e)
    }
})

// (R) GET listing by ID
router.get('/listings/:id', async (req, res) => {
    const _id = req.params.id // mongoose automatically converts string ids into ObjectIds
    try {
        const listing = await Listing.findById(_id)
        if (!listing) {
            return res.status(404).send()
        }
        res.send(listing)
    } catch (e) {
        res.status(500).send(e)
    }

})

// (U)
router.patch('/listings/:id', async (req, res) => {
    try {
        const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!listing) {
            return res.status(404).send()
        }
        res.send(listing)
    } catch (e) {
        res.status(400).send(e)
    }
})

// (D)
router.delete('/listings/:id', async (req, res) => {
    try {
        const listing = await Listing.findByIdAndDelete(req.params.id)
        if (!listing) {
            return res.status(404).send()
        }
        res.send(listing)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router
