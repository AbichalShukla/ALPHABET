const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  courses: [CourseSchema]  
});


const StudentCourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  groups: [GroupSchema]  
});

 const   classesname = mongoose.model('classname', StudentCourseSchema);

const studentClassfirst = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  });
  
  const studentclassfirst= mongoose.model("studentclassfirst", studentClassfirst);



  const studentClasssecond = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  });
  
  const studentclasssecond= mongoose.model("studentclasssecond", studentClasssecond);
module.exports = { classesname,studentclassfirst,studentclasssecond };
