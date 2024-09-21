import React, { useState, useEffect, useContext } from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const StudentClassList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [classData, setClassData] = useState([]);
  console.log("class data", classData);

  const { user } = useContext(AuthContext);

  const intervalTime = 2000;

  useEffect(() => {
   
    fetchData();
  }, [user]);


  const fetchData = async () => {
    try {
      const token = user?.token;
      
      if (token) {
        const response = await axios.get(
          `http://localhost:8080/class/class_data`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
          }
        );
        console.log( "responseasks",response)
       
        setClassData(response.data.data);

      } else {
        console.error("User token not available");
      }
    } catch (error) {
      console.error("Error fetching class data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % classData.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [classData.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + classData.length) % classData.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % classData.length);
  };




  return (
    <>
      {/* Slider */}
      <div className="relative w-full mt-4 mx-auto">
        {classData.length > 0 && (
          <div className="overflow-hidden rounded-lg">

            <img
              src={classData[currentIndex]?.image}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-96 object-cover"
            />
          </div>
        )}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
        >
          &#10095;
        </button>
      </div>

      {/* Class List Header */}
      <h5 className="mb-2 flex items-center justify-center mt-4 gap-2 font-regural text-3xl tracking-tight text-black">
        Please Select Courses
      </h5>

      {/* Class Cards */}
      <div className="flex flex-wrap gap-6 mt-5 justify-center px-4">
        {classData.map((item, index) => (
          <div
            className="max-w-xs w-full bg-black border border-gray-200 rounded-lg shadow-lg"
            key={index}
          >
            <Link to={`/studentgtom/${item._id}`}>
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={item.image}
                alt={item.name}
              />
            </Link>

            <div className="p-5">
              <Link to={`/studentntot/${item._id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  {item.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                {item.description}
              </p>

              <Link
                to={`/studentgtom/${item.groupid}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg focus:ring-4 focus:outline-none focus:ring-white"
              >
                Click Here
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        ))}
      </div>
    </>
  );
};

export default StudentClassList;
