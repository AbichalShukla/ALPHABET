const { CoursesData } = require("../Model/CoursesData");
const fs = require("fs");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

exports.CourseData = async (req, res) => {
  try {
    const id = req.params.id;
    const courseName = req.params.courseName;
    console.log(id, courseName);
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid or missing ID",
        success: false,
      });
    }

    const data = await CoursesData.findById(id);

    console.log(data);
    if (!data) {
      return res
        .status(400)
        .json({ success: false, message: "No courses available" });
    }

    let fileContent;

    switch (courseName) {
      case "HTML":
        fileContent = fs.readFileSync(
          path.join(__dirname, "..", "public", "htmlCourse.html"),
          "utf-8"
        );
        break;
      case "javaScript":
        fileContent = fs.readFileSync(
          path.join(__dirname, "..", "public", "javascript.html"),
          "utf-8"
        );
        break;
      case "css":
        fileContent = fs.readFileSync(
          path.join(__dirname, "..", "public", "css.html")
        );
        break;
      default:
        return res
          .status(400)
          .json({ success: false, message: "Invalid course type requested" });
    }

    res.status(200).json({
      message: "Data found successfully",
      success: true,
      data: data,
      fileContent,
    });

    // console.log(fileContent);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
