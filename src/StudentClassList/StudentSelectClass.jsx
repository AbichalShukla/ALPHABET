import React from 'react'

const StudentSelectClass = () => {
  return (
   <>
   
   <div className='flex gap-6 mt-5 items-center justify-between'>
                <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://picsum.photos/seed/picsum/500/300"alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">    
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">NC Classes</h5>
                        </a>
                        <p className="mb-3 font-normal text-white dark:text-gray-400"></p>
                        <button href="ncclassdata" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg focus:ring-4 focus:outline-none focus:ring-white">
                       
                            Click Now
                        </button>
                    </div>
                </div>
                <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://picsum.photos/seed/picsum/500/300" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">9 TO 12 </h5>
                        </a>
                        <p className="mb-3 font-normal text-white dark:text-gray-400">Alphabet Learning Hub also supports parents and educators with guides, tips, and lesson plans for integrating alphabet learning into daily routines and classrooms.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg focus:ring-4 focus:outline-none focus:ring-white">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://picsum.photos/seed/picsum/500/300" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Greduation TO Master</h5>
                        </a>
                        <p className="mb-3 font-normal text-white dark:text-gray-400">Welcome to Alphabet Learning Hub, where learning letters becomes fun and engaging with interactive games and activities.From colorful animations .</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg focus:ring-4 focus:outline-none focus:ring-white">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
   </>
  )
}

export default StudentSelectClass
