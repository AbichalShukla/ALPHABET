import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";




const StudentCoursesData = () => {
  const [courseData, setCourseData] = useState([]);
  console.log(courseData, "sdjhd");
  const { user } = useContext(AuthContext);
  const { id, CourseName } = useParams();
  console.log(id, CourseName);

  useEffect(() => {
    if (id && CourseName) {
      fetchStudentCoursesData();
    }
  }, [id, CourseName, user]);

  const fetchStudentCoursesData = async () => {
    try {

      const token = user?.token;

      if (token) {
        const response = await axios.get(
          `http://localhost:8080/courses/coursedata/${id}/${CourseName}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("course responsedata",response.data.data);
        setCourseData(response.data);
      }
    } catch (error) {
      console.error("Error fetching course data", error);
    }
  };

  return (
    <div>
      <h1>{courseData?.data?.CourseName}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: courseData?.fileContent }}
      />

    </div>
  );
};

export default StudentCoursesData;
