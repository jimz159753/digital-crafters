import React from 'react'
import './Technologies.css'
import Image from 'next/image'

export const Technologies = () => {
    return (
        <div className='technologies'>
            <div className='flex flex-col'>
                <h1>Technologies we choose</h1>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
            </div>
            <div className='flex flex-row gap-10'>
                <img
                    src="https://images.unsplash.com/photo-1698078038619-7f94733f9413?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width='300px'
                />
                <img
                    src="https://images.unsplash.com/photo-1698078038619-7f94733f9413?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width='300px'
                />
                <img
                    src="https://images.unsplash.com/photo-1698078038619-7f94733f9413?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width='300px'
                />
                <img
                    src="https://images.unsplash.com/photo-1698078038619-7f94733f9413?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width='300px'
                />
            </div>
        </div>
    )
}
