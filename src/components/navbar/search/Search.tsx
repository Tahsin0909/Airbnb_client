'use client'

import { SearchProps } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { IoSearchSharp } from "react-icons/io5";
import { convertDate } from "@/helper/date";
import GuestInput from "./GuestInput";



const Search: React.FC<SearchProps> = ({ searchToggle, setSearchToggle }) => {

    const countryList = ["France", "Italy", "Spain", "Japan", "United States", "Thailand", "Australia", "Greece", "Canada", "United Kingdom"];

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleToggler = () => {
        if (searchToggle) {
            setSearchToggle((prev) => !prev);
        }
    };

    const [inputValue, setInputValue] = useState("");
    //fixed
    const [guests, setGuests] = useState<string | null>("");
    console.log(guests);
    //fixed


    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start); // Directly store Date object
        setEndDate(end); // Directly store Date object
    };

    const formattedStartDate = startDate ? convertDate(startDate) : null;
    const formattedEndDate = endDate ? convertDate(endDate) : null;

    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState(countryList);

    const inputRef = useRef<HTMLDivElement>(null);

    // Handle input change to filter country list and update value
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        // Filter the country list based on the input value
        const filtered = countryList.filter((country) =>
            country.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCountries(filtered);
        setShowDropdown(true);  // Show dropdown while typing
    };

    // Handle selecting a country from the dropdown
    const handleSelectCountry = (country: string) => {
        setInputValue(country);
        setShowDropdown(false);  // Close dropdown after selection
    };

    // Close dropdown when clicking outside the input or dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputRef]);

    return (

        <div>
            <div className="flex justify-center items-center relative">
                {
                    <div
                        className={`${searchToggle ? 'h-[48px] w-[calc(100vw - 50%)] -translate-y-12' : 'h-[65px] w-[calc(100vw - 20%)] translate-y-4'}
                flex items-center border rounded-full shadow-md font-semibold transition-[width,height,transform]  ease-in-out transform origin-center absolute z-30 bg-white group`}
                    >

                        <div className="relative h-full" ref={inputRef}>
                            {/* Location Input */}
                            <div className="flex flex-col items-start justify-center px-4 h-full rounded-l-full border-r-2 border-gray-300 focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white hover:bg-gray-200 group-focus-within:bg-gray-200">
                                <label htmlFor="where" className={`${searchToggle ? "" : 'text-[13px]'} text-nowrap  transition-all duration-500`}>
                                    Anywhere
                                </label>

                                <input
                                    id="where"
                                    onClick={handleToggler}
                                    type="text"
                                    placeholder="Search destination"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onFocus={() => setShowDropdown(true)} // Show dropdown when focused
                                    className={`${searchToggle ? 'hidden ' : 'w-[250px] placeholder:text-base'}  bg-transparent focus:outline-0 placeholder:text-base`}
                                />
                            </div>

                            {/* Suggestions Dropdown */}
                            {showDropdown && filteredCountries.length > 0 && (
                                <ul className="absolute top-[70px] left-0 w-full bg-white  rounded-lg shadow-lg z-10">
                                    {filteredCountries.map((country, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                            onClick={() => handleSelectCountry(country)}
                                        >
                                            {country}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>



                        {/* date  */}
                        <div className="flex flex-col items-start justify-center border-r-2 border-gray-300 focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white   group-focus-within:bg-gray-200 h-full">

                            <label
                                onClick={handleToggler}
                                htmlFor="startData"
                                className={`${searchToggle ? 'block px-4' : 'hidden'} text-nowrap transition-all duration-500`}>
                                Any Date
                            </label>


                            <div className={`${searchToggle ? 'hidden' : 'flex '} items-center justify-center h-full`}>

                                {/* start date  */}
                                <div
                                    className={`${searchToggle ? 'hidden' : 'block'} border-r-2 px-4 h-full focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white  hover:bg-gray-200 group-focus-within:bg-gray-200 flex flex-col items-start justify-center`}>

                                    <label
                                        htmlFor="startData"
                                        className="text-[13px] flex items-center gap-11">
                                        <span> Check In</span>
                                        <span> Check Out</span>
                                    </label>
                                    <DatePicker
                                        id="startData"
                                        monthsShown={2}
                                        onChange={onChange}
                                        startDate={startDate}
                                        endDate={endDate}
                                        // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                                        selectsRange
                                        selectsDisabledDaysInRange
                                        selectsStart
                                        closeOnScroll={(e) => e.target === document}
                                        className="bg-transparent focus:outline-0 transition-all delay-300 placeholder:text-center"
                                        placeholderText="Add Dates" />
                                </div>
                                {/* start date  */}
                            </div>
                        </div>
                        {/* date  */}




                        {/* guest  */}
                        <GuestInput
                            value={guests}            // Pass the state for guests
                            onChange={setGuests}       // Update the guests state
                            handleToggler={handleToggler}  // Function to toggle search
                            searchToggle={searchToggle}    // Boolean to control input visibility
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

