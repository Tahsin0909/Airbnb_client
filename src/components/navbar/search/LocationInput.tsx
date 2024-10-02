/* eslint-disable @next/next/no-img-element */
import { sharedProps } from "@/app/types";
import React, { useState, useRef, useEffect } from "react";

// List of countries for location search
const countries: {
    country: string;
    title: string;
    icon: string;
}[] = [
    { country: "France", title: "Explore the Beauty of Paris", icon: "https://cdn-icons-png.freepik.com/256/3665/3665201.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "Italy", title: "Discover the Heart of Rome", icon: "https://cdn-icons-png.freepik.com/256/562/562460.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "Spain", title: "Vibrant Culture in Barcelona", icon: "https://cdn-icons-png.freepik.com/256/17359/17359653.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "Japan", title: "Experience Tokyo's Modern Wonders", icon: "https://cdn-icons-png.freepik.com/256/3665/3665201.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "United States", title: "Visit Iconic New York City", icon: "https://cdn-icons-png.freepik.com/256/9155/9155456.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "Thailand", title: "Adventure Awaits in Bangkok", icon: "https://cdn-icons-png.freepik.com/256/562/562460.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "Australia", title: "Sydney's Stunning Harbor Views", icon: "https://cdn-icons-png.freepik.com/256/9155/9155456.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "Greece", title: "Santorini's Breathtaking Sunsets", icon: "https://cdn-icons-png.freepik.com/256/17359/17359653.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "Canada", title: "Explore the Wilderness of Banff", icon: "https://cdn-icons-png.freepik.com/256/3665/3665201.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" },
    { country: "United Kingdom", title: "London's Historical Landmarks Await", icon: "https://cdn-icons-png.freepik.com/256/9155/9155456.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" }
];

// LocationInput component to handle search for a destination
const LocationInput: React.FC<sharedProps> = ({ value, onChange, handleToggler, searchToggle }) => {
    const [showDropdown, setShowDropdown] = useState(false); // State to show/hide dropdown
    const [filteredCountries, setFilteredCountries] = useState(countries); // State to store filtered country list
    const inputRef = useRef<HTMLDivElement>(null); // Ref for detecting clicks outside the input

    // Handle input change to filter country list and update the input value
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value; // Get input value
        onChange(newValue); // Update parent component with the new input value

        // Filter country list based on input value
        const filtered = countries.filter((countryItem) =>
            countryItem.country.toLowerCase().includes(newValue.toLowerCase())
        );
        setFilteredCountries(filtered); // Update filtered list
        setShowDropdown(true); // Show dropdown when typing
    };

    // Handle selecting a country from the dropdown
    const handleSelectCountry = (country: string) => {
        onChange(country); // Update input value with selected country
        setShowDropdown(false); // Hide dropdown after selection
    };

    // Close dropdown when clicking outside the input
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowDropdown(false); // Hide dropdown if clicked outside the input
            }
        };
        document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
        };
    }, [inputRef]);

    return (
        <div className="relative h-full" ref={inputRef}>
            {/* Location Input field */}
            <div className="flex flex-col items-start justify-center px-4 h-full rounded-l-full border-r-2 border-gray-300 focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white hover:bg-gray-200 group-focus-within:bg-gray-200">
                <label htmlFor="where" className={`${searchToggle ? "" : 'text-[13px]'} text-nowrap transition-all duration-500`}>
                    Anywhere {/* Default label */}
                </label>

                {/* Input for entering the location */}
                <input
                    id="where"
                    onClick={handleToggler} // Trigger toggle action on click
                    type="text"
                    placeholder="Search destination" // Placeholder text
                    value={value ?? ""} // Current input value
                    onChange={handleInputChange} // Handle input change
                    onFocus={() => setShowDropdown(true)} // Show dropdown when focused
                    className={`${searchToggle ? 'hidden ' : 'w-[250px] placeholder:text-base'} bg-transparent focus:outline-0 placeholder:text-base`}
                />
            </div>

            {/* Suggestions Dropdown */}
            {showDropdown && !searchToggle && filteredCountries.length > 0 && (
                <ul className="absolute top-[70px] left-0 w-full h-[400px] overflow-y-scroll countryList bg-white rounded-lg shadow-lg z-10">
                    {filteredCountries.map((countryItem, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center"
                            onClick={() => handleSelectCountry(countryItem.country)} // Handle country selection
                        >
                            {/* Icon */}
                            <img src={countryItem.icon} alt={countryItem.country} className="w-6 h-6 mr-2" />

                            {/* Country and Title */}
                            <div>
                                <p className="font-bold">{countryItem.country}</p>
                                <p className="text-sm text-gray-500">{countryItem.title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationInput;
