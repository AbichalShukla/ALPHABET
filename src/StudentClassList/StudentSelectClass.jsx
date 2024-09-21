import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

const StudentSelectClass = () => {
    const [subjectData, setSubjectData] = useState([]);
    
    const { user } = useContext(AuthContext); 
    console.log("User:", user);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = user?.token;

            if (token) {
                const response = await axios.get("http://localhost:8080/subject/student_subject", {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setSubjectData(response.data.data);
                console.log("Subject Data:", response.data.data);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    return (
        <>
            <div className='items-center flex mt-3 justify-center text-2xl font-regular'>
                <h1>Select Course</h1>
            </div>
            <div className="mt-4 flex flex-wrap justify-between items-center">
                {subjectData.map((item, index) => (
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
                        <div className="relative shadow-lg rounded-lg overflow-hidden">
                            <img className="bg-cover bg-center h-56 w-full" src={item.image} alt="Course" />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
                                <h2 className="text-white text-xl font-bold">{item.name}</h2>
                                <a href='/mbabranch' className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg focus:ring-4 focus:outline-none focus:ring-white">
                                    Click Here
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default StudentSelectClass;
