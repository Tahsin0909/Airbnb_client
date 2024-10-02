import { sharedProps } from "@/app/types";
import React from "react";

// GuestInput component for adding guest information
const GuestInput: React.FC<sharedProps> = ({ value, onChange, handleToggler, searchToggle }) => {
    
    // Handle input change and update the parent component with the new value
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value); // Update the parent component state with the new input value
    };

    return (
        <div
            className="flex flex-col items-start justify-center px-4 h-full focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white hover:bg-gray-200 group-focus-within:bg-gray-200"
        >
            {/* Label for guest input, toggles when clicked */}
            <label
                onClick={handleToggler}
                htmlFor="guest"
                className={`${searchToggle ? "" : "text-[13px]"} text-nowrap transition-all duration-500`}
            >
                Add guest {/* Label for input field */}
            </label>

            {/* Input for entering the number of guests */}
            <input
                id="guest"
                type="text"
                placeholder="Add Guest" // Placeholder text for input
                value={value ?? ""} // Fallback to an empty string if value is null
                onChange={handleInputChange} // Handle input change event
                className={`${searchToggle ? "hidden" : "w-[150px] placeholder:text-base"} bg-transparent focus:outline-0`} // Hide or show based on `searchToggle`
            />
        </div>
    );
};

export default GuestInput;
