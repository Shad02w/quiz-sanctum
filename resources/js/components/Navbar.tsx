import React, { useCallback, useState } from 'react'
import { logout } from '@models/Api'
import { HiLogout } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'


const Navbar = () => {

    const [username, setUsername] = useState('Admin')
    const [expanded, setExpanded] = useState(false)

    const handleLogout = useCallback(async () => {
        await logout()
        // window.location.replace('http://localhost:8000/login')
    }, [logout])

    return (
        <nav className='box-border border-gray-100 bg-white dark:bg-gray-900 border-b sticky top-0 dark:border-b-0 '>
            <div className='w-full block  container mx-auto md:flex md:flex-row md:justify-between items-center px-4 lg:px-0 py-6'>
                <div id='navbar-logo-tabs' className='flex flex-col md:flex-row w-full'>
                    <div className='flex flex-row justify-between'>
                        <a className='flex items-center mr-16 md:pl-2 lg:pl-2' href="/">
                            <img className='w-auto h-6 md:h-10 hidden dark:block' src="../images/digiatdigi-white.svg" alt="logo of company for dark mode" />
                            <img className='w-auto h-6 md:h-10 block dark:hidden' src="../images/digiatdigi-logo.svg" alt="logo of company" />
                        </a>
                        <button
                            className='text-gray-600 hover:text-gray-800 focus:text-gray-800 ring-gray-600 focus:ring-gray-800
                        dark:text-gray-600 dark:hover:text-white dark:focus:text-white  dark:ring-gray-600 dark:focus:ring-white
                        focus:outline-none block md:hidden cursor-pointer select-none'
                            onClick={() => setExpanded(pre => !pre)}
                        >
                            {
                                expanded
                                    ?
                                    <IoCloseSharp className='fill-current w-6 h-6' />
                                    :
                                    <GiHamburgerMenu className='fill-current w-6 h-6' />
                            }
                        </button>
                    </div>
                    <div className={`block md:w-full mt-6 md:mt-0  md:flex md:flex-row md:justify-between md:items-center ${expanded ? '' : 'hidden'}`}>
                        <ul className={` text-base md:text-lg md:flex md:flex-row`}>
                            <li className='navbar-btn-base navbar-btn-active mb-2 md:mb-0 md:mr-8'>
                                <a>Questions</a>
                            </li>
                            <li className='navbar-btn-base navbar-btn-unactive mb-2 md:mb-0 md:mr-8'>
                                <a>Candidates</a>
                            </li>
                            <li className='navbar-btn-base navbar-btn-unactive mb-2 md:mb-0 md:mr-8'>
                                <a>Results</a>
                            </li>
                        </ul>
                        <hr className='block md:hidden mt-4 mb-4 border-t-2 border-gray-500 dark:border-gray-700' />
                        <ul id='navbar-admin' className='flex flex-row items-center justify-between md:justify-start text-base md:text-lg'>
                            <li className='md:mr-8 px-2 font-bold'>{username}</li>
                            <li>
                                <form method='post' action="http://locahost:8000/logout" >
                                    <button
                                        type='submit'
                                        // onClick={handleLogout} 
                                        className='p-3 text-white bg-rose-700 hover:bg-rose-600 cursor-pointer rounded-lg'>
                                        <HiLogout className='fill-current w-5' />
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;