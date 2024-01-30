import { useState } from 'react'
import Card from './Card'

export default function Testimonial({ data }) {

    const [index, setIndex] = useState(0)

    return (
        <div className='w-full max-w-[1000px]  text-center mt-[2rem] md:mt-[8rem] flex flex-col items-center px-[.7rem] pb-10'>
            <div>
                <h1 className='text-3xl md:text-4xl font-bold '>Our Testimonials</h1>
                <span className='inline-block w-[150px] h-[4px] bg-blue-600 mb-[10px] rounded-sm'></span>
            </div>
            <Card {...data[index]} index={index} setIndex={setIndex} size={data.length} />

        </div>
    )
}