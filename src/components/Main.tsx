import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Main: React.FC = () => {
        return (
                <div className='flex flex-row gap-2 bg-[#FBFBFB] overflow-hidden'>
                        <Sidebar />
                        <div className='w-[78vw]'>
                                <Outlet />
                        </div>
                        <div className="absolute right-3 top-3 bg-white border border-[#F2F2F5] rounded-full">
                                <div className="flex gap-2 p-2">
                                        <button className='p-1 rounded-full hover:bg-[#FBFBFB]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M3.91916 5.0257C4.1677 4.70771 4.44464 4.41487 4.74585 4.15043C4.60487 5.03366 4.61314 5.93938 4.77535 6.82925C5.06512 8.41888 5.8324 9.88248 6.97497 11.025C8.11753 12.1676 9.58113 12.9349 11.1708 13.2247C12.0606 13.3869 12.9664 13.3951 13.8496 13.2542C13.5851 13.5554 13.2923 13.8323 12.9743 14.0809C12.1521 14.7235 11.1863 15.157 10.1597 15.3443C9.13313 15.5317 8.07643 15.4671 7.08027 15.1563C6.0841 14.8454 5.17822 14.2976 4.44033 13.5597C3.70244 12.8218 3.15457 11.9159 2.84374 10.9198C2.5329 9.92359 2.46836 8.86688 2.65568 7.8403C2.84299 6.81371 3.27655 5.84789 3.91916 5.0257Z" stroke="#818284" stroke-width="1.5" />
                                                </svg>
                                        </button>
                                        <button className='p-1 rounded-full hover:bg-[#FBFBFB]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M8.25 12L5.25 9M5.25 9L8.25 6M5.25 9H15.75M12 12V12.75C12 13.3467 11.7629 13.919 11.341 14.341C10.919 14.7629 10.3467 15 9.75 15H4.5C3.90326 15 3.33097 14.7629 2.90901 14.341C2.48705 13.919 2.25 13.3467 2.25 12.75V5.25C2.25 4.65326 2.48705 4.08097 2.90901 3.65901C3.33097 3.23705 3.90326 3 4.5 3H9.75C10.3467 3 10.919 3.23705 11.341 3.65901C11.7629 4.08097 12 4.65326 12 5.25V6" stroke="#818284" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                        </button>
                                        <button className='rounded-full hover:bg-[#FBFBFB] border-2 border-[#108A00]'>
                                                <img src="/images/avatar.png" alt="" />
                                        </button>
                                </div>
                        </div>
                </div>
        )
}

export default Main