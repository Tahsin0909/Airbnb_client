import { convertDate } from "@/helper/date";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

interface DateRangePickerProps {
  onDateChange: (value: { formattedStartDate: string | null, formattedEndDate: string | null }) => void;
  handleToggler: () => void;
  searchToggle: boolean;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ handleToggler, searchToggle, onDateChange }) => {

  // State for start and end dates
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Function to handle date changes
  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates; // Destructure the dates array
    console.log("start", typeof start); // Log the start date type
    setStartDate(start); // Update start date state
    setEndDate(end); // Update end date state
  };

  // UseEffect to format dates and pass them up through onDateChange prop
  useEffect(() => {
    const formattedStartDate = startDate ? convertDate(startDate) : null; // Convert start date if it exists
    const formattedEndDate = endDate ? convertDate(endDate) : null; // Convert end date if it exists
    onDateChange({ formattedStartDate, formattedEndDate }); // Pass formatted dates to parent component
  }, [endDate, onDateChange, startDate]); // Trigger effect when startDate or endDate changes

  return (
    <div className="flex flex-col items-start justify-center border-r-2 border-gray-300 focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white group-focus-within:bg-gray-200 h-full">

      {/* Label for toggling the date picker */}
      <label
        onClick={handleToggler}
        htmlFor="startData"
        className={`${searchToggle ? 'block px-4' : 'hidden'} text-nowrap transition-all duration-500`}>
        Any Date
      </label>

      <div className={`${searchToggle ? 'hidden' : 'flex '} items-center justify-center h-full`}>

        {/* Date range picker container */}
        <div
          className={`${searchToggle ? 'hidden' : 'block'} border-r-2 px-4 h-full focus-within:!bg-white focus-within:shadow-xl focus-within:hover:bg-white hover:bg-gray-200 group-focus-within:bg-gray-200 flex flex-col items-start justify-center`}>

          {/* Label for check-in and check-out */}
          <label
            htmlFor="startData"
            className="text-[13px] flex items-center gap-11">
            <span> Check In</span>
            <span> Check Out</span>
          </label>

          {/* Date picker component */}
          <DatePicker
            id="startData"
            monthsShown={2} // Show 2 months in the calendar
            onChange={handleChange} // Trigger handleChange on date selection
            startDate={startDate || undefined} // Start date value
            endDate={endDate || undefined} // End date value
            selectsRange // Enable range selection
            selectsDisabledDaysInRange // Allow selection of disabled days in range
            selectsStart // Marks this as the start of the range
            closeOnScroll={(e) => e.target === document} // Close picker on scroll
            className="bg-transparent focus:outline-0 transition-all delay-300 placeholder:text-center"
            placeholderText="Add Dates" // Placeholder text for date picker
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
