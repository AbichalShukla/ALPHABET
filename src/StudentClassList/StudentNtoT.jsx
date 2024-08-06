import React from 'react'
import { cardimagestudentlist2 } from '../image'

const StudentNtoT = () => {
  return (
    <>
      <div className=" mt-4 flex flex-wrap justify-between items-center">
        {[
     
          { src: cardimagestudentlist2, text: '9th', href: '' },
          { src: cardimagestudentlist2, text: ' Metric(10th)', href: 'studentntoy' },
          { src: cardimagestudentlist2, text: '11th', href: 'studentntoy' },
          { src: cardimagestudentlist2, text: '12th', href: 'studentntoy' },
        
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

export default StudentNtoT
