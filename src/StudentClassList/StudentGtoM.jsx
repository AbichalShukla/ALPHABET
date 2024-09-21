import React, { useContext, useEffect, useState } from "react";
import { cardimagestudentlist2 } from "../image";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const StudentGtoM = () => {
  const [classList, setClassList] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    studentList();
  }, [id]);

  const studentList = async () => {
    try {
      const token = user?.token;
      if (token) {
        const response = await axios.get(
          `http://localhost:8080/student/student_class_name/${id}`,
          {
            headers: {
              Authorization: ` Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("courseid", response.data.data.courses);
        setClassList(response.data.data.courses);
      } else {
        console.log("no token providerd ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-gray-100 mt-4 flex flex-wrap justify-between items-center">
        {classList.map((card, index) => (
          <div key={index} className="p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="bg-cover bg-center h-56 w-full"
                src={card.image}
                alt="Student List"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h2 className="text-white text-xl font-bold">
                  {card.courseName}
                </h2>
                <Link
                  to={`/studentcoursedata/${card.courseId}/${card.courseName}`}
                  className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg focus:ring-4 focus:outline-none focus:ring-white"
                >
                  Click Here
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentGtoM;
