const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { Room } = require("./model/rooms.model");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Rooms route
app.get("/rooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Error fetching rooms", error: err });
  }
});



mongoose
  .connect(process.env.DATABASE_URL, { dbName: process.env.DB_NAME || 'Hotel' })
  .then(() => {
    console.log("Connected to MongoDB (db:", process.env.DB_NAME || 'Hotel', ")");
    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running on port", process.env.PORT || 5000)
    );
  })
  .catch((err) => console.error(" MongoDB connection error:", err));
