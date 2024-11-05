import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <ol className='navbar'>
            <i><h1 className='font-Questrial text-[35px]'>DIGITAL CRAFTERS</h1></i>
            <i className='flex justify-between tabs desktop:w-1/3 tablet:w-1/2'>
                <p>About Us</p>
                <p>Services</p>
                <p>Industries</p>
                <p>Insights</p>
                <p>Contact Us</p>
            </i>
        </ol>
    )
}
