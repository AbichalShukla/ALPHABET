const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const studentCoursesData = new mongoose.Schema({
  title: { type: String, required: true },
  courseId: { type: Number, required: true },
  courselink: { type: String },
  courseimage: { type: String, required: true },
  coursesCode: { type: String },
  courseVideo: { type: String, required: true },

});

const CoursesData = mongoose.model("CoursesData ", studentCoursesData);

module.exports = { CoursesData };
