import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import {
    cardimagestudentlist,
    cardimagestudentlist2,
    learningslider1,
    learningslider2,
    learningslider3,
    learningslider4,
    learningslider5,
    learningslider6,
    learningslider7
} from '../image';

const StudentClassList = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [classData, setClassData] = useState([]);
    const totalItems = 7;
    const intervalTime = 3000;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/class/class_data", {
                    headers: {
                        'Authorization': 'Bearer ',
                        'Content-Type': 'application/json',
                    }
                });
                console.log(response.data);
                setClassData(response.data.data);
            } catch (error) {
                console.error('Error fetching class data:', error);
            }
        };
        fetchData();
    }, []);

    const images = [
        cardimagestudentlist,
        cardimagestudentlist2,
        learningslider1,
        learningslider2,
        learningslider3,
        learningslider4,
        learningslider5,
        learningslider6,
        learningslider7
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, intervalTime);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id="default-carousel" className="relative flex items-center justify-center mt-3 bg-black" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute block w-full duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
                            data-carousel-item
                        >
                            <img
                                src={image}
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                            aria-current={index === activeIndex}
                            aria-label={`Slide ${index + 1}`}
                            data-carousel-slide-to={index}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={() => setActiveIndex((activeIndex - 1 + totalItems) % totalItems)}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={() => setActiveIndex((activeIndex + 1) % totalItems)}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <h5 className="mb-2 flex items-center justify-center mt-4 gap-2 font-regural text-3xl tracking-tight text-white">Please Select Classes</h5>
            <div className="flex flex-wrap gap-6 mt-5 justify-center">
                {classData.map((item, index) => (
                    <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
                        <Link to={`/studentntoy:${item._id}`}>
                            <img className="rounded-t-lg" src={item.image} alt={item.name} />
                       
                        </Link>
                        <div className="p-5">
                            <Link to={`studentntot${item._id}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{item.name}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-white dark:text-gray-400">{item.description}</p>
                            <Link to={`/studentgtom:${item._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg focus:ring-4 focus:outline-none focus:ring-white">
                                Click Here
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
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
