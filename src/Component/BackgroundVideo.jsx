import React from "react";
import { Link, NavLink } from "react-router-dom";

const BackgroundVideo = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./bgvideo.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="relative z-10 mx-auto max-w-screen-xl text-center py-10 lg:py-32">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome To Alphabet
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          where knowledge meets convenience. Our platform offers a diverse
          range of courses designed to cater to learners of all ages and
          backgrounds. Whether you're looking to advance your career, acquire
          new skills, 
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="/login"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-cyan-900 ring-1 ring-white"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
