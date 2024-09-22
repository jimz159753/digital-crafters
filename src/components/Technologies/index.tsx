import React from 'react'
import './Technologies.css'
import Image from 'next/image'
import reactjs from '../../assets/images/reactjs.png'
import nodejs from '../../assets/images/nodejs.png'
import mongodb from '../../assets/images/mongodb.png'
import aws from '../../assets/images/aws.png'

export const Technologies = () => {
    return (
        <div className='technologies'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[50px]'>Technologies we choose</h1>
                <p className='font-Questrial text-[28px] text-[#000000] text-opacity-50 w-[80%]'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
            </div>
            <div className='flex flex-row gap-10 justify-between w-full'>
                <Image className='h-[100px] w-[308px]' src={reactjs} alt='reactjs' />
                <Image className='h-[100px] w-[163px]' src={nodejs} alt='nodejs' />
                <Image className='h-[100px] w-[341px]' src={mongodb} alt='mongodb' />
                <Image className='h-[100px] w-[148px]' src={aws} alt='aws' />
            </div>
        </div>
    )
}
