import React, { useState, useRef, useEffect } from "react";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

const countryList = [
  "France", "Italy", "Spain", "Japan", "United States", 
  "Thailand", "Australia", "Greece", "Canada", "United Kingdom"
];

const LocationInput: React.FC<LocationInputProps> = ({ value, onChange }) => {
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
    <div className="relative" ref={inputRef}>
      <input
        id="where"
        type="text"
        placeholder="Search destination"
        value={value}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        className="w-[250px] bg-transparent focus:outline-0 placeholder:text-base"
      />

      {showDropdown && filteredCountries.length > 0 && (
        <ul className="absolute top-[70px] left-0 w-full bg-white rounded-lg shadow-lg z-10">
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
