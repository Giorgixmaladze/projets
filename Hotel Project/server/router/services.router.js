const express = require("express")
const { getServices } = require("../controllers/services.control")

const servicesRouter = express.Router()


servicesRouter
    .route("/")
    .get(getServices)


module.exports = servicesRouter