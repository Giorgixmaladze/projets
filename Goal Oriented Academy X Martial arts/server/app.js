const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { userRouter } = require('./router/users.router');
const globalErrorHanlder = require('./controller/error.controller');

dotenv.config();
const app = express();



app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

app.use(globalErrorHanlder)

mongoose.connect(process.env.DATABASE_URL).then(()=>{
	console.log("Connected to MongoDB")
	app.listen(process.env.PORT,() =>{
		console.log(`Server is running on port ${process.env.PORT}`)
	})
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})