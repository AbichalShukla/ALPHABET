import React from 'react'
import { cardimagestudentlist2 } from '../image'


 
const StudentNtoY = () => {
  return (
    <>
      <div className="bg-gray-100 mt-4 flex flex-wrap justify-between items-center">
        {[
          { src: cardimagestudentlist2, text: 'Nc Class', href: 'ncclasscourse' },
          { src: cardimagestudentlist2, text: '1st', href: 'firstclasscourse' },
          { src: cardimagestudentlist2, text: '2nd', href: 'secondclasscourse' },
          { src: cardimagestudentlist2, text: '3rd', href: 'thirdclasscourse' },
          { src: cardimagestudentlist2, text: '4th', href: 'fourthclasscourse' },
          { src: cardimagestudentlist2, text: '5th', href: 'fiftclasscourse' },
          { src: cardimagestudentlist2, text: '6th', href: 'sixclasscourse' },
          { src: cardimagestudentlist2, text: '7th', href: 'sclasscourse' },
          { src: cardimagestudentlist2, text: '8th', href: 'yclasscourse' },
        ].map((card, index) => (
          <div key={index} className="p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="bg-cover bg-center h-56 w-full" src={card.src} alt="Student List" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h2 className="text-white text-xl font-bold">{card.text}</h2>
                <a href={card.href} className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg focus:ring-4 focus:outline-none focus:ring-white">
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
  )
}

export default StudentNtoY
