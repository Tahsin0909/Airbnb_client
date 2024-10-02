import { convertDate } from "@/helper/date";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

interface DateRangePickerProps {
  onDateChange: (value: {formattedStartDate: string | null, formattedEndDate: string | null }) => void;
  handleToggler: () => void;
  searchToggle: boolean;

}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ handleToggler, searchToggle, onDateChange }) => {

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    console.log("start", typeof (start));
    setStartDate(start); // Directly store Date object
    setEndDate(end); // Directly store Date object
  };

  useEffect(() => {
    const formattedStartDate = startDate ? convertDate(startDate) : null;
    const formattedEndDate = endDate ? convertDate(endDate) : null;
    onDateChange({formattedStartDate : formattedStartDate, formattedEndDate: formattedEndDate } )
  }, [endDate, onDateChange, startDate])


  // console.log(formattedStartDate, formattedEndDate);
  return (
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
            onChange={handleChange}
            startDate={startDate ? startDate : undefined}
            endDate={endDate ? endDate : undefined}
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
  );
};

export default DateRangePicker;
