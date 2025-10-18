const { Room } = require("../model/rooms.model");

const getAllRooms = async (req,res,next) =>{
    try {
        const rooms = await Room.find()
        res.json(rooms);
      } catch (err) {
        res.status(500).json({ message: "Error fetching rooms", error: err });
      }
}

module.exports = {getAllRooms}