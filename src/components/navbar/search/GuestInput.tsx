import React from "react";

interface GuestInputProps {
    value: string | null;
    onChange: (value: string | null) => void;
    handleToggler: () => void;
    searchToggle: boolean;
}

const GuestInput: React.FC<GuestInputProps> = ({ value, onChange, handleToggler, searchToggle }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value); // Update the parent component state with the new input value
    };

    return (
        <div
            className="flex flex-col items-start justify-center px-4 h-full focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white hover:bg-gray-200 group-focus-within:bg-gray-200"
        >
            <label
                onClick={handleToggler}
                htmlFor="guest"
                className={`${searchToggle ? "" : "text-[13px]"} text-nowrap transition-all duration-500`}
            >
                Add guest
            </label>

            <input
                id="guest"
                type="text"
                placeholder="Add Guest"
                value={value ?? ""} // Fallback to an empty string if value is null
                onChange={handleInputChange}
                className={`${searchToggle ? "hidden" : "w-[150px] placeholder:text-base"} bg-transparent focus:outline-0`}
            />
        </div>
    );
};

export default GuestInput;
