import React from "react";
import DatePicker from "react-datepicker";

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        monthsShown={2}
        selectsRange
        className="bg-transparent focus:outline-0 transition-all delay-300 placeholder:text-center"
        placeholderText="Add Dates"
      />
    </div>
  );
};

export default DateRangePicker;
