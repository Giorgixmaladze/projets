const express = require('express');
const { getAllUsers, addUser, getSingleUser } = require('../controller/users.controller');

// შექმნილი არის როუტერი რომელიც შეგვიძლია ვამუშაოთ სხვადასხვა ბილიკზე მაგრამ ამ შემთხვევაში გვაქვს მხოლოდ პარამეტრიანი ბილიკი მხოლოდ ერთი მომხმარებლისთვის და ჩვეულებრივი /users ბილიკი ყველა მომხმარებლის წამოსაღებად ან ერთი მომხმარებლის დასამატებლას 
const userRouter = express.Router();


userRouter
    .route("/")
    .get(getAllUsers)
    .post(addUser)


userRouter
    .route("/:id")
    .get(getSingleUser)

module.exports = {
    userRouter
}