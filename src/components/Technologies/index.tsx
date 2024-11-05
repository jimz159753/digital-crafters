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
            <div className='flex flex-row gap-10 justify-between w-full tablet:flex-wrap tablet:justify-center'>
                <Image className='h-[100px] w-[308px] desktop:h-[100px] tablet:h-[70px] tablet:w-[278px] tablet:justify-center' src={reactjs} alt='reactjs' />
                <Image className='h-[100px] w-[163px] desktop:h-[100px] tablet:h-[70px] tablet:w-[133px] tablet:justify-center' src={nodejs} alt='nodejs' />
                <Image className='h-[100px] w-[341px] desktop:h-[100px] tablet:h-[70px] tablet:w-[311px] tablet:justify-center' src={mongodb} alt='mongodb' />
                <Image className='h-[100px] w-[148px] desktop:h-[100px] tablet:h-[70px] tablet:w-[118px] tablet:justify-center' src={aws} alt='aws' />
            </div>
        </div>
    )
}
