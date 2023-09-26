import React from 'react'
import { Link } from 'react-router-dom'

const Login:React.FC = () => {
        return (
                <div className='w-full h-full flex justify-center items-center p-4 overflow-y-auto font-lato'>
                        <div className='w-full md:w-[70%] lg:w-[50%]  bg-white rounded-lg shadow-lg py-5 px-16'>
                                <div className="w-full h-full flex flex-col items-center">
                                        <div className="flex gap-2 items-center">
                                                <img src="/svg/logo.svg" alt="" className='w-[40%]' />
                                                <p className="text-[#108A00] text-[24px] font-bold">Bondi Ai</p>
                                        </div>
                                        <p className='my-3 text-[30px] font-bold  text-[#2A2A2B]'>Login to your account</p>
                                        <p className='my-2   text-[#636365]'>Welcome back! Please enter your details.</p>
                                        <form action="" className='my-3 w-full'>
                                                <p className="font-medium text-[#636365]" >Username</p>
                                                <input type="text" placeholder='Enter Username' className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none' />
                                                <p className="font-medium text-[#636365] mt-3" >Password</p>
                                                <input type="password" placeholder='Enter Password' className='px-4 py-2 rounded-md  border border-[#D6D7DA] w-full outline-none' />
                                                <div className="my-3 w-full flex justify-between items-center">
                                                        <div className="flex gap-2">
                                                                <input type="checkbox" />
                                                                <p className='text-[#818284] font-medium text-sm'>Rembember for 20 days</p>
                                                        </div>
                                                        <p className="text-sm text-[#108A00]">Forgot Password</p>
                                                </div>
                                                <input type="submit" value="Sign in" className='bg-[#108A00] px-4 py-2.5 rounded-md text-[#FBFBFB] font-bold text-sm my-2 w-full cursor-pointer' />
                                                <div className="flex w-full justify-center">
                                                        <p className='text-[#636365] text-sm'>Don’t have an account?</p>
                                                        <Link to={"/signup"} className='font-bold text-[#108A00] text-sm'>Register</Link>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default Login