import React from 'react'
import './Projects.css'

export const Projects = () => {
    return (
        <div className='projects'>
            <div className='text-center'>
                <h1 className='text-[50px]'>Our latest projects</h1>
                <p className='font-Questrial text-[28px] text-[#000000] text-opacity-50'>Lorem Ipsum es simplemente el texto de relleno de las
                    imprentas y archivos de texto.</p>
            </div>
            <div className='flex gap-10'>
                <div>Project 1</div>
                <div>Project 2</div>
                <div>Project 3</div>
            </div>
            <button className='btn-more'>VIEW MORE</button>
        </div>
    )
}
