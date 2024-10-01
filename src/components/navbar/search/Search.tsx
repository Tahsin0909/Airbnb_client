/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { SearchProps } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { IoSearchSharp } from "react-icons/io5";
import { convertDate } from "@/helper/date";
import GuestInput from "./GuestInput";
import LocationInput from "./LocationInput";
import DateRangePicker from "./DateRangePicker";



const Search: React.FC<SearchProps> = ({ searchToggle, setSearchToggle }) => {

    //fixed



    const handleToggler = () => {
        if (searchToggle) {
            setSearchToggle((prev) => !prev);
        }
    };

    const [guests, setGuests] = useState<string | null>("");
    // console.log(guests);
    const [location, setLocation] = useState<string | null>("");
    const [date, setDate] = useState<{formattedStartDate: string | null, formattedEndDate: string | null } | null>(null);
    // console.log(location);
    console.log("Search", location,date?.formattedStartDate, date?.formattedEndDate, guests );
    //fixed


    return (

        <div>
            <div className="flex justify-center items-center relative">
                {
                    <div
                        className={`${searchToggle ? 'h-[48px] w-[calc(100vw - 50%)] -translate-y-12' : 'h-[65px] w-[calc(100vw - 20%)] translate-y-4'}
                flex items-center border rounded-full shadow-md font-semibold transition-[width,height,transform]  ease-in-out transform origin-center absolute z-30 bg-white group`}
                    >

                        <LocationInput
                            handleToggler={handleToggler}
                            searchToggle={searchToggle}
                            value={location}
                            onChange={setLocation} />


                        {/* date  */}
                        {/* Date Range Picker */}
                        <DateRangePicker
                            onDateChange={setDate}
                            handleToggler={handleToggler}
                            searchToggle={searchToggle}
                        />
                        {/* date  */}




                        {/* guest  */}
                        <GuestInput
                            value={guests}
                            onChange={setGuests}
                            handleToggler={handleToggler}
                            searchToggle={searchToggle}
                        />
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

