'use client'
import React from 'react'
import './Services.css'
import Image from 'next/image'
import development from '../../assets/images/development.png'
import graphicDesign from '../../assets/images/graphic_design.png'
import seo from '../../assets/images/seo.png'
import customer from '../../assets/images/customer.png'

export const Services = () => {
    return (
        <div className='services'>
            <div className='flex flex-wrap desktop:flex-row laptop:flex-row tablet:flex-col gap-6 text-[28px] basis-[55%] text-opacity-50'>
                <div className='card rounded-br-[100px] rounded-tl-[100px]'>
                    <Image src={development} alt='development' />
                    <p>Web Development</p>
                </div>
                <div className='card rounded-bl-[100px] rounded-tr-[100px]'>
                    <Image src={graphicDesign} alt='graphic design' />
                    <p>Graphic Design</p>
                </div>
                <div className='card rounded-tr-[100px] rounded-bl-[100px]'>
                    <Image src={seo} alt='seo' />
                    <p>SEO</p>
                </div>
                <div className='card rounded-tl-[100px] rounded-br-[100px]'>
                    <Image src={customer} alt='customer' />
                    <p>Customer Service</p>
                </div>
            </div>
            <div className='flex flex-col relative basis-[45%] gap-5'>
                <h1 className='text-[50px] tablet:text-center'>Our services</h1>
                <p className='font-Questrial text-[28px] text-[#000000] text-opacity-50 tablet:text-center'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar.</p>
            </div>
        </div>
    )
}
