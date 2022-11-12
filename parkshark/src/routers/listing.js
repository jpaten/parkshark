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

// (R) GET all listings
router.get('/listings', async (req, res) => {
    try {
        const listings = await Listing.find({})
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
