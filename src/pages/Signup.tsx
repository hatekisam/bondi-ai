import React from 'react'
import { Link } from 'react-router-dom'

const Signup:React.FC = () => {
        return (
                <div className='w-full h-full flex justify-center items-center overflow-y-auto p-5 font-lato'>
                        <div className='w-full md:w-[70%] lg:w-[50%]  bg-white rounded-lg shadow-lg py-5 px-16'>
                                <div className="w-full h-full flex flex-col items-center">
                                        <div className="flex gap-2 items-center">
                                                <img src="/svg/logo.svg" alt="" className='w-[40%]' />
                                                <p className="text-[#108A00] text-[24px] font-bold">Bondi Ai</p>
                                        </div>
                                        <p className='my-3 text-[30px] font-bold  text-[#2A2A2B]'>Register</p>
                                        <form action="" className='my-3 w-full'>
                                                <div className="my-3">
                                                        <p className="font-medium text-[#636365]" >Firstname</p>
                                                        <input type="text" placeholder='Enter Firstname' className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none' />
                                                </div>
                                                <div className="my-3">
                                                        <p className="font-medium text-[#636365]" >Lastname</p>
                                                        <input type="text" placeholder='Enter Lastname' className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none' />
                                                </div>
                                                <div className="my-3">
                                                        <p className="font-medium text-[#636365]" >Email</p>
                                                        <input type="text" placeholder='Enter Email' className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none' />
                                                </div>
                                                <div className="my-3">
                                                        <p className="font-medium text-[#636365]" >Password</p>
                                                        <input type="password" placeholder='Enter Password' className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none' />
                                                </div>
                                                <input type="submit" value="Sign up" className='bg-[#108A00] px-4 py-2.5 rounded-md text-[#FBFBFB] font-bold text-sm my-2 w-full cursor-pointer' />
                                                <div className="flex w-full justify-center">
                                                        <p className='text-[#636365] text-sm'>Already have an account?</p>
                                                        <Link to={"/login"} className='font-bold text-[#108A00] text-sm'>Login</Link>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default Signup