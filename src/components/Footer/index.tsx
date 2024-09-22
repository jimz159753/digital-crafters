import React from 'react'
import './Footer.css'
import Image from 'next/image'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import x from '../../assets/images/x.png'

export const Footer = () => {
    const services = [
        'Customer Experience Transformation​',
        'Data and AI',
        'Product and Platform Engineering',
        'Global Design Studio',
        'Digital Transformation Consulting',
        'Infrastructure, Cloud and Security'
    ]

    const industries = [
        'Banking, Financial Services and Insurance',
        'Life Sciences',
        'Telecom and Media',
        'Healthcare',
        'Hi-Tech',
        'Retail, Consumer Goods & Distribution'
    ]

    return (
        <div className='footer'>
            <div className='text-space basis-1/3'>
                <h1>MINDS</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias debitis nam rerum aliquid obcaecati natus ducimus corrupti temporibus, suscipit recusandae assumenda rem laudantium? A magni quia tempora rerum nulla harum.</p>
                <div className='flex gap-4'>
                    <Image className='w-12' src={facebook} alt='facebook' />
                    <Image className='w-12' src={instagram} alt='instagram' />
                    <Image className='w-12' src={linkedin} alt='facebook' />
                    <Image className='w-12' src={x} alt='x' />
                </div>
            </div>
            <div className='basis-1/2 flex flex-row flex-wrap'>
                <div className='text-space basis-1/2'>
                    <h1 className='text-[25px] text-[#636363]'>Services</h1>
                    {
                        services.map((service: string, idx: number) => <p key={idx}>{service}</p>)
                    }
                </div>
                <div className='text-space basis-1/2'>
                    <h1 className='text-[25px] text-[#636363]'>Industries</h1>
                    {
                        industries.map((industry: string, idx: number) => <p key={idx}>{industry}</p>)
                    }
                </div>
            </div>
        </div>
    )
}
