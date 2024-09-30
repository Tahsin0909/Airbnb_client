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
                flex items-center border rounded-full shadow-md font-semibold transition-[width,height,transform]  ease-in-out transform origin-center absolute z-30 bg-white group`}
                    >

                        {/* location */}
                        <div
                            className="flex flex-col items-start justify-center px-4 h-full rounded-l-full border-r-2 border-gray-300 focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white  hover:bg-gray-200 group-focus-within:bg-gray-200 ">


                            <label
                                onClick={handleToggler}
                                htmlFor="where"
                                className={`${searchToggle ? "" : 'text-[13px]'} transition-all duration-500`}>
                                AnyWhere
                            </label>


                            <input
                                id="where"
                                type="text"
                                placeholder="Search destination"
                                className={`${searchToggle ? 'hidden' : 'w-[250px] placeholder:text-base'} bg-transparent focus:outline-0`} />

                        </div>
                        {/* location */}



                        {/* date  */}
                        <div className="flex flex-col items-start justify-center border-r-2 border-gray-300 focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white  hover:bg-gray-200 group-focus-within:bg-gray-200 h-full">

                            <label
                                onClick={handleToggler}
                                htmlFor="startData"
                                className={`${searchToggle ? 'block px-4' : 'hidden'} text-nowrap transition-all duration-500`}>
                                Any Date
                            </label>


                            <div className={`${searchToggle ? 'hidden' : 'flex '} items-center justify-center h-full`}>

                                {/* start date  */}
                                <div
                                    className={`${searchToggle ? 'hidden' : 'block'} border-r-2 px-4 h-full focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white  hover:bg-gray-200 group-focus-within:bg-gray-200`}>

                                    <label
                                        htmlFor="startData" c
                                        lassName="text-[13px]">
                                        Check In
                                    </label>
                                    <input
                                        id="startData"
                                        type="date"
                                        className="bg-transparent focus:outline-0" />

                                </div>
                                {/* start date  */}




                                {/* end date  */}
                                <div
                                    className={`${searchToggle ? 'hidden' : 'block'} px-4 h-full focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white  hover:bg-gray-200 group-focus-within:bg-gray-200`}>

                                    <label
                                        htmlFor="endData"
                                        className="text-[13px]">
                                        Check Out</label>
                                    <input
                                        id="endData"
                                        type="date"
                                        className="bg-transparent focus:outline-0" />

                                </div>
                                {/* end date  */}



                            </div>
                        </div>
                        {/* date  */}




                        {/* guest  */}
                        <div
                            className="flex flex-col items-start justify-center  px-4 h-full focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white  hover:bg-gray-200 group-focus-within:bg-gray-200">

                            <label
                                onClick={handleToggler}
                                htmlFor="guest"
                                className={`${searchToggle ? "" : 'text-[13px]'} text-nowrap  transition-all duration-500`}>
                                Add guest
                            </label>
                            <input
                                id="guest"
                                type="text"
                                placeholder="Search destination"
                                className={`${searchToggle ? 'hidden' : 'w-[150px] placeholder:text-base'} bg-transparent focus:outline-0`} />

                        </div>
                        {/* guest  */}




                        {/* search  */}
                        <div
                            className="h-full flex justify-center items-center rounded-r-full group-focus-within:bg-gray-200">
                            <button
                                type="submit"
                                className="my-[7px] mr-[7px] p-[8px] bg-primary rounded-full active:scale-95 transition-all ease-in-out flex justify-center items-center">
                                <IoSearchSharp size={20} className="text-white" />
                            </button>
                        </div>
                        {/* search  */}



                    </div>
                }
            </div>
        </div>



    );
};

export default Search;

