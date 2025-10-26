const express = require("express");
const sendMessages = require("../controllers/messages.control");

const messageRouter = express.Router()


messageRouter
    .route("/")
    .post(sendMessages)


module.exports = messageRouter