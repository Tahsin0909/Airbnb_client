export function convertDate(date: Date): string {
    console.log(date);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function formatDateRange(dates: string[]): string {
    if (dates.length === 0) return "";

    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

    // Convert the first and last date into a readable format
    const firstDate = new Date(dates[0]);
    const lastDate = new Date(dates[dates.length - 1]);

    const firstFormatted = firstDate.toLocaleDateString('en-US', options);
    const lastFormatted = lastDate.toLocaleDateString('en-US', options);

    // If the month is the same for both dates, omit the month in the second date
    const sameMonth = firstDate.getMonth() === lastDate.getMonth();

    return sameMonth
        ? `${firstFormatted} - ${lastDate.getDate()}`
        : `${firstFormatted} - ${lastFormatted}`;
}


