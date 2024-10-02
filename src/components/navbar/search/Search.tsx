/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { SearchProps } from "@/app/types";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // Importing Datepicker styles
import { IoSearchSharp } from "react-icons/io5"; // Importing search icon
import GuestInput from "./GuestInput"; // Guest input component
import LocationInput from "./LocationInput"; // Location input component
import DateRangePicker from "./DateRangePicker"; // Date range picker component
import { useRouter } from "next/navigation"; // Next.js router for navigation

// Search component with props: searchToggle and setSearchToggle
const Search: React.FC<SearchProps> = ({ searchToggle, setSearchToggle }) => {

    // Toggles search bar open/close
    const handleToggler = () => {
        if (searchToggle) {
            setSearchToggle((prev) => !prev); // Toggle the state
        }
    };

    // State variables for guests, location, and date
    const [guests, setGuests] = useState<string | null>(""); // State for number of guests
    const [location, setLocation] = useState<string | null>(""); // State for location input
    const [date, setDate] = useState<{ formattedStartDate: string | null, formattedEndDate: string | null } | null>(null); // State for date range

    // Logs the state values (location, start date, end date, guests)
    console.log("Search", location, date?.formattedStartDate, date?.formattedEndDate, guests);

    const router = useRouter(); // If using Next.js for navigation

    // Handle search action
    const handleSearch = () => {
        // Construct the query string from the states (location, date, guests)
        const query = new URLSearchParams({
            country: location || "", // If location is null, fallback to an empty string
            start_date: date?.formattedStartDate || "", // Fallback if no start date
            end_date: date?.formattedEndDate || "", // Fallback if no end date
            guest: guests || "0", // Default to "0" if no guest count is provided
        });

        // // Log the search query for debugging
        // console.log("Search", query.toString());

        // // Navigate to search results page with the query string (Next.js)
        router.push(`?${query.toString()}`);
        
        // // Fetch data from the API based on the search query
        // fetch(`https://air-bnb-server-beryl.vercel.app/rooms?${query.toString()}`)
        // .then(res => res.json())
        // .then(data => console.log(data)) // Log the fetched data
    };


    return (
        <div>
            <div className="flex justify-center items-center relative">
                {
                    <div
                        className={`${searchToggle ? 'h-[48px] w-[calc(100vw - 50%)] -translate-y-12' : 'h-[65px] w-[calc(100vw - 20%)] translate-y-4'}
                            flex items-center border rounded-full shadow-md font-semibold transition-[width,height,transform] ease-in-out transform origin-center absolute z-30 bg-white group`}
                    >

                        {/* Location Input */}
                        <LocationInput
                            handleToggler={handleToggler} // Toggle search state
                            searchToggle={searchToggle} // Whether search is toggled
                            value={location} // Location input value
                            onChange={setLocation} // Update location value
                        />

                        {/* Date Range Picker */}
                        <DateRangePicker
                            onDateChange={setDate} // Update date range value
                            handleToggler={handleToggler} // Toggle search state
                            searchToggle={searchToggle} // Whether search is toggled
                        />

                        {/* Guest Input */}
                        <GuestInput
                            value={guests} // Guest input value
                            onChange={setGuests} // Update guest value
                            handleToggler={handleToggler} // Toggle search state
                            searchToggle={searchToggle} // Whether search is toggled
                        />

                        {/* Search Button */}
                        <div className="h-full flex justify-center items-center rounded-r-full group-focus-within:bg-gray-200">
                            <button
                                onClick={handleSearch} // Trigger search action
                                className="my-[7px] mr-[7px] p-[8px] bg-primary rounded-full active:scale-95 transition-all ease-in-out flex justify-center items-center"
                            >
                                <IoSearchSharp size={20} className="text-white" /> {/* Search Icon */}
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Search;
