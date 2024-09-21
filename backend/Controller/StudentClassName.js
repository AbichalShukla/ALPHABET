const express = require("express");
const {
  classesname,
  studentclassfirst,
  studentclasssecond,
} = require("../Model/StudentClassName.js");
const mongoose = require( "mongoose")


exports.StudentClassesName = async (req, res) => {
    
    try {
      const id = req.params.id;
       console.log(id)
        
  
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: "Invalid or missing ID",
          success: false,
        });
      }
  
      const data = await classesname.findById(id);
  
      if (!data) {
        return res.status(404).json({
          message: "No Student Class found",
          success: false,
        });
      }
  
      res.status(200).json({
        message: "Data found successfully",
        success: true,
        data: data,
      });
    } catch (error) {
      console.error("Error fetching student classes:", error);
      res.status(500).json({
        message: "Server Error",
        success: false,
      });
    }
  };
  
exports.Studentclassfirst = async (req, res) => {
  const id = req.params();
  console.log(id);
  try {
    const data = await studentclassfirst.find();
    if (!data) {
      res.status(400).json({
        message: "No data found",
        success: false,
      });
    } else {
      res.status(200).json({
        message: "Data found successfully",
        success: true,
        data: data,
      });
    }
  } catch {
    res.status(500).json({
      message: "Server Error",
      success: false,
      data: data,
    });
  }
};

exports.studentclasssecond = async (req, res) => {
  try {
    const data = await studentclasssecond.find();
    if (!data) {
      res.status(400).json({
        message: "No data found",
        success: false,
      });
    } else {
      res.status(200).json({
        message: "Data found successfully",
        success: true,
        data: data,
      });
    }
  } catch {
    res.status(500).json({
      message: "Server Error",
      success: false,
      data: data,
    });
  }
};
