import React from 'react'
import './Projects.css'
import Image from 'next/image'
import realsync from '../../assets/images/realsync.png'
import ergeon from '../../assets/images/ergeon.png'
import hca from '../../assets/images/hca.png'

export const Projects = () => {
    return (
        <div className='projects'>
            <div className='text-center flex flex-col items-center'>
                <h1 className='text-[50px]'>Our latest projects</h1>
                <p className='font-Questrial text-[28px] text-[#000000] text-opacity-50 w-[80%]'>Lorem Ipsum es simplemente el texto de relleno de las
                    imprentas y archivos de texto.</p>
            </div>
            <div className='flex gap-10 desktop:flex desktop:flex-nowrap desktop:flex-row tablet:flex-wrap tablet:flex-col'>
                <Image className='w-[460px] h-[460px] object-cover rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)]' src={realsync} alt='realsynch' />
                <Image className='w-[460px] h-[460px] object-cover rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)]' src={ergeon} alt='ergeon' />
                <Image className='w-[460px] h-[460px] object-cover rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)]' src={hca} alt='hca' />
            </div>
            <button className='btn-more'>VIEW MORE</button>
        </div>
    )
}
