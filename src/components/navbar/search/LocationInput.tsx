import React, { useState, useRef, useEffect } from "react";

interface LocationInputProps {
    value: string | null;
    onChange: (value: string) => void;
    handleToggler: () => void;
    searchToggle: boolean;
}

const countryList = [
    "France", "Italy", "Spain", "Japan", "United States",
    "Thailand", "Australia", "Greece", "Canada", "United Kingdom"
];

const LocationInput: React.FC<LocationInputProps> = ({ value, onChange, handleToggler, searchToggle }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState(countryList);
    const inputRef = useRef<HTMLDivElement>(null);

    // Handle input change to filter country list and update value
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange(newValue);

        const filtered = countryList.filter((country) =>
            country.toLowerCase().includes(newValue.toLowerCase())
        );
        setFilteredCountries(filtered);
        setShowDropdown(true);  // Show dropdown while typing
    };

    const handleSelectCountry = (country: string) => {
        onChange(country);
        setShowDropdown(false);
    };

    // Handle click outside to close the dropdown
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
                    value={value ?? ""} 
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

    );
};

export default LocationInput;
