'use client'
import React from 'react'
import './Clients.css'
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import patricia from '../../assets/images/patricia.png'

export const Clients = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
    };
    return (
        <div className='clients'>
            <Slider {...settings}>
                <div>
                    <div className='flex flex-col items-center gap-10 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)] bg-white p-8 m-2 rounded-tl-[30px] rounded-br-[30px] w-[300px] h-[380px]'>
                        <Image className='h-28 w-28' src={patricia} alt='development' />
                        <div className='flex flex-col gap-5 text-[#000000] text-opacity-50'>
                            <h1>Patricia Smith</h1>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center gap-10 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)] bg-white p-8 m-2 rounded-tl-[30px] rounded-br-[30px] w-[300px] h-[380px]'>
                        <Image className='h-28 w-28' src={patricia} alt='development' />
                        <div className='flex flex-col gap-5 text-[#000000] text-opacity-50'>
                            <h1>Patricia Smith</h1>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center gap-10 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)] bg-white p-8 m-2 rounded-tl-[30px] rounded-br-[30px] w-[300px] h-[380px]'>
                        <Image className='h-28 w-28' src={patricia} alt='development' />
                        <div className='flex flex-col gap-5 text-[#000000] text-opacity-50'>
                            <h1>Patricia Smith</h1>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar.</p>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className='flex justify-center items-center flex-col w-2/3'>
                <h1 className='text-[50px]'>Our clients love us because our quality work.</h1>
                <p className='font-Questrial text-[28px] text-[#000000] text-opacity-50'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un</p>
            </div>
        </div>
    )
}
