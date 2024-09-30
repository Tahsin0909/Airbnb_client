'use client'

import { SearchProps } from "@/app/types";
import { IoSearchSharp } from "react-icons/io5";



  const Search: React.FC<SearchProps> = ({ searchToggle, setSearchToggle })=> {


    const handleToggler = () => {
        console.log("i am clicked");
        setSearchToggle(prev => !prev); 
    }

    return (

        <div>
            <div className="relative bg-white">
                {
                    <div className={`${searchToggle ? '-translate-y-[75px] h-[48px]' : "h-[65px]"} flex items-center gap-2 border  rounded-full shadow-md text-[14px] font-semibold transition-all absolute -translate-x-80  z-30 bg-white`} >

                        <div className="px-4 border-r-2 border-gray-300" >

                            <label htmlFor="where" className="">AnyWhere</label>
                            <input id="where" type="text" />
                        </div>


                        <div className="border-r-2 border-gray-300">
                            <label onClick={handleToggler} htmlFor="startData" className={`${searchToggle ? ' block px-4' : 'hidden'} text-nowrap transition-all`}>Any Date</label>
                            <div className="flex items-center justify-center ">
                                <div className={`${searchToggle ? 'hidden' : 'block'} border-r-2 px-4`}>
                                    <label htmlFor="startData">Check In</label>
                                    <input id="startData" type="date" />
                                </div>
                                <div className={`${searchToggle ? 'hidden' : 'block'} px-4`}>
                                    <label htmlFor="endData">Check Out</label>
                                    <input id="endData" type="date" />
                                </div>
                            </div>
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

