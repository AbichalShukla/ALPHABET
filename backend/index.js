const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const auth = require("./Services/VerifyUser");
const cors = require("cors"); 

const authRouter = require("./Routes/AuthRoute");
const classRoute = require("./Routes/classRoute");
const CourseData = require("./Routes/CourseDataRoute");
const studentclassnamerouter = require("./Routes/StudentClassRoutes");

dotenv.config();
// server initiliziation
const Server = express();

//  middleware

Server.use(express.json());
Server.use(bodyParser.json());

Server.use(
  cors({
    exposedHeaders: ["X-Total-count"],
  })
);

//Routes Middleware routes midleware
Server.use("/auth", authRouter.router);
Server.use("/class", auth, classRoute.router);
Server.use("/student", auth, studentclassnamerouter.router);
Server.use("/courses",  CourseData.router);

//static file setup

Server.get("/", (req, res) => {
  res.send("Hello World");
});

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
}

main();

Server.listen(process.env.PORT, () => {
  console.log(`Server is started on port ${process.env.PORT}`);
});

// // [
//   {
//     _id: ObjectId('66bee4d5f353052134ee294c'),
//     name: 'Computer Science and Engineering',
//     image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg'
//   },
//   {
//     _id: ObjectId('66bee4d5f353052134ee294d'),
//     name: 'Mechanical Engineering',
//     image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg'
//   },
//   {
//     _id: ObjectId('66bee4d5f353052134ee294e'),
//     name: 'Civil Engineering',
//     image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg'
//   },
//   {
//     _id: ObjectId('66bee4d5f353052134ee294f'),
//     name: 'Electrical Engineering',
//     image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg'
//   },
//   {
//     _id: ObjectId('66bee4d5f353052134ee2950'),
//     name: 'Information Technology',
//     image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg'
//   },
//   {
//     _id: ObjectId('66bee4d5f353052134ee2951'),
//     name: 'Electronics and Communication Engineering',
//     image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg'
//   },
//   {
//     _id: ObjectId('66bee4d5f353052134ee2952'),
//     name: 'Biotechnology',
//     image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg'
//   },
//   {
//     _id: ObjectId('66bee4d5f353052134ee2953'),
//     name: 'Chemical Engineering',
//     image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg'
//   }
// ]
