import Image from 'next/image'
import React from 'react'
import workers from '../../assets/images/workers.png'
import './About.css'

export const About = () => {
    return (
        <div className='about'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-[50px] text-center'>We craft marketing & digital products that grow businesses</h1>
                <p className='font-Questrial text-[28px] text-[#000000] text-opacity-50 text-center'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar.</p>
            </div>
            <Image src={workers} alt='workers' />
        </div>
    )
}
