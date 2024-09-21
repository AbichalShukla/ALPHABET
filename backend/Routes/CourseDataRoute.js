const express = require("express");
const router = express.Router();
const { CourseData } = require("../Controller/StudentCourse");

router.get("/coursedata/:id/:courseName", CourseData);

exports.router = router;
