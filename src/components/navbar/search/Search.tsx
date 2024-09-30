'use client'

import { SearchProps } from "@/app/types";
import { IoSearchSharp } from "react-icons/io5";



const Search: React.FC<SearchProps> = ({ searchToggle, setSearchToggle }) => {


    const handleToggler = () => {
        console.log("i am clicked");
        if (searchToggle) {
            setSearchToggle(prev => !prev);
        }
    }

    return (

        <div>
            <div className="flex justify-center items-center relative">
                {
                    <div
                        className={`${searchToggle ? 'h-[48px] w-[calc(100vw - 50%)] -translate-y-12' : 'h-[65px] w-[calc(100vw - 20%)] translate-y-4'}
                flex items-center gap-2 border rounded-full shadow-md font-semibold
                transition-[width,height,transform]  ease-in-out transform origin-center absolute z-30 bg-white`}
                    >
                        <div className="px-4 border-r-2 border-gray-300">
                            <label onClick={handleToggler} htmlFor="where" className={`${searchToggle ? "" : 'text-[13px]'} transition-all duration-500`}>
                                AnyWhere
                            </label>
                            <input id="where" type="text" placeholder="Search destination"
                                className={`${searchToggle ? 'hidden' : 'w-[250px] placeholder:text-base'} transition-all duration-500`} />
                        </div>

                        <div className="border-r-2 border-gray-300">
                            <label onClick={handleToggler} htmlFor="startData" className={`${searchToggle ? 'block px-4' : 'hidden'} text-nowrap transition-all duration-500`}>
                                Any Date
                            </label>
                            <div className="flex items-center justify-center">
                                <div className={`${searchToggle ? 'hidden' : 'block'} border-r-2 px-4 transition-all duration-500`}>
                                    <label htmlFor="startData" className="text-[13px]">Check In</label>
                                    <input id="startData" type="date" />
                                </div>
                                <div className={`${searchToggle ? 'hidden' : 'block'} px-4 transition-all duration-500`}>
                                    <label htmlFor="endData" className="text-[13px]">Check Out</label>
                                    <input id="endData" type="date" />
                                </div>
                            </div>
                        </div>

                        <div className="pl-4">
                            <label onClick={handleToggler} htmlFor="guest" className={`${searchToggle ? "" : 'text-[13px]'} text-nowrap transition-all duration-500`}>
                                Add guest
                            </label>
                            <input id="guest" type="text" placeholder="Search destination"
                                className={`${searchToggle ? 'hidden' : 'w-[150px] placeholder:text-base'} transition-all duration-500`} />
                        </div>

                        <div className="my-[7px] mr-[7px] p-[10px] bg-primary rounded-full transition-all duration-500 ease-in-out">
                            <IoSearchSharp size={20} className="text-white" />
                        </div>
                    </div>
                }
            </div>
        </div>



    );
};

export default Search;

