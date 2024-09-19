import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <ol className='navbar'>
            <i><h1 className='font-Questrial text-[35px]'>DIGITAL CRAFTERS</h1></i>
            <i className='flex justify-between w-1/3 tabs'>
                <p>About Us</p>
                <p>Services</p>
                <p>Industries</p>
                <p>Insights</p>
                <p>Contact Us</p>
            </i>
        </ol>
    )
}
