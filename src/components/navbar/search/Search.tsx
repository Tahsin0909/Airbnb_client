'use client'

import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {

    const [searchToggle, setSearchToggle] = useState(false)


    useEffect(() => {
        console.log(window.scrollY);
        const handleScroll = () => {
            const toggleHeight = 100;
            if (window.scrollY > toggleHeight) {
                setSearchToggle(true);
            } else if (window.scrollY <= toggleHeight) {
                setSearchToggle(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    return (
        <div className="relative bg-white">
            {
                <div className={`${searchToggle ? 'opacity-100' : "opacity-100"} flex items-center gap-2 border h-[48px] rounded-full shadow-md text-[14px] font-semibold transition-all absolute -translate-x-56 translate-y-2 z-30 bg-white`} >
                    <div className="px-4 border-r-2 border-gray-300" >
                        <p className="">AnyWhere</p>
                    </div>
                    <div className="px-4 border-r-2 border-gray-300">
                        <p className="text-nowrap">Any Date</p>
                    </div>
                    <div className="pl-4">
                        <p className="text-nowrap">Add Guest</p>
                    </div>
                    <div className="my-[7px] mr-[7px] p-[10px] bg-primary rounded-full">
                        <IoSearchSharp size={20} className="text-white" />
                    </div>
                </div >
            }
        </div>
    );
};

export default Search;