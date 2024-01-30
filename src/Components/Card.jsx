import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Card({ name, image, job, text, index, setIndex, size }) {

    const [showMore, setShowMore] = useState(false);

    function leftSlider() {

        if (index - 1 < 0) {
            setIndex(size - 1);
            return;
        }

        setIndex(index - 1);
        setShowMore(false)
        //OR

        // setIndex((prev) => {
        //     if (prev < 1) {
        //         return size - 1;
        //     }

        //     return prev - 1;
        // })

    }

    function rightSlider() {

        if (index + 1 > size - 1) {
            setIndex(0);
            return;
        }

        setIndex(index + 1);

        //OR

        // setIndex((prev) => {
        //     if (prev > size - 2) {
        //         return 0;
        //     }

        //     return prev + 1;
        // })
        setShowMore(false)
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * size);
        setIndex(randomIndex);
    }


    return (
        <div className="max-w-[800px]  px-10 md:pb-10 pb-5 border-2 md:mt-[2rem] flex flex-col items-center relative shadow-md rounded-lg bg-white shadow-slate-400">
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mt-5 md:mt-0 rounded-full bg-blue-700 md:absolute top-[-15%] left-[5%]">
                <img src={image} className="w-[95%] h-[100%] rounded-full ml-[-.5rem] mt-[.3rem] object-cover" />
            </div>
            <div className="mt-[2rem]">
                <h2 className="text-xl md:text-3xl font-bold tracking-wide">{name}</h2>
                <p className="text-[1rem]   text-gray-500 tracking-widest">{job}</p>
            </div>
            <div className="flex flex-col items-center space-y-3 md:space-y-10 mt-[1.5rem]">
                <FaQuoteLeft color="blue" />
                <p className="text-[.9rem] md:text-[1.1rem] text-gray-600 text-center leading-5 md:leading-7">{
                    showMore ? text : text.length > 194 ? text.substring(0, 179) + '...' : text
                }
                    {text.length > 194 ? <span className="text-sky-400 tracking-wide cursor-pointer" onClick={() => setShowMore(!showMore)}> {showMore ? 'ShowLess' : 'ShowMore'}</span> : null}
                </p>
                <FaQuoteRight color="blue" />
            </div>
            <div className="mt-[1rem] md:mt-[2rem] flex w-[100px]  justify-between text-xl md:text-3xl py-2">
                <FaChevronLeft color="blue" className="cursor-pointer" onClick={leftSlider} />
                <FaChevronRight color="blue" className="cursor-pointer" onClick={rightSlider} />
            </div>

            <button className="mt-3 md:mt-[1.5rem] bg-blue-700 px-[1.5rem] py-[.6rem] md:px-[4rem] md:py-[.8rem] rounded-lg text-white font-semibold text-xl" onClick={surpriseHandler}>
                Surprise Me
            </button>


        </div >
    )
}