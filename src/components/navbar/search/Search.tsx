'use client'

import useSearchToggle from "@/components/hooks/useSearchToggle";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
    const [searchToggle] = useSearchToggle()
    return (

        <div>
            <div className="relative bg-white">
                {
                    <div className={`${searchToggle ? '-translate-y-[75px]' : ""} flex items-center gap-2 border h-[48px] rounded-full shadow-md text-[14px] font-semibold transition-all absolute -translate-x-80  z-30 bg-white`} >
                        <div className="px-4 border-r-2 border-gray-300" >

                            <label htmlFor="where" className="">AnyWhere</label>
                            <input id="where" type="text" />
                        </div>
                        <div className="px-4 border-r-2 border-gray-300">
                            <label htmlFor="date" className="text-nowrap">Any Date</label>
                            <input id="date" type="text" />
                        </div>
                        <div className="pl-4">
                            <label htmlFor="guest" className="text-nowrap">Add Guest</label>
                            <input id="guest" type="text" />
                        </div>
                        <div className="my-[7px] mr-[7px] p-[10px] bg-primary rounded-full">
                            <IoSearchSharp size={20} className="text-white" />
                        </div>
                    </div >
                }
            </div>
        </div>

    );
};

export default Search;

