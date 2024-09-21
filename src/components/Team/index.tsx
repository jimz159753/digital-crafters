import React from 'react'
import './Team.css'
import Image from 'next/image'
import luis from '../../assets/images/luis.png'

export const Team = () => {
    return (
        <div className='team'>
            <div className='text-center'>
                <h1 className='text-[50px]'>Meet the team</h1>
                <p className='font-Questrial text-[28px] text-[#000000] text-opacity-50'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
            </div>
            <div className='flex flex-row gap-10 justify-center'>
                <Image className='w-[300px] h-[300px] object-cover rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)]' src={luis} alt='luis' />
                <Image className='w-[300px] h-[300px] object-cover rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)]' src={luis} alt='luish' />
                <Image className='w-[300px] h-[300px] object-cover rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)]' src={luis} alt='luis' />
                <Image className='w-[300px] h-[300px] object-cover rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)]' src={luis} alt='luis' />
            </div>
        </div>
    )
}
