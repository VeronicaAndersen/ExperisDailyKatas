// How Many Days Until 2021?

// Given a date, return how many days date is away from 2021 
// (end date not included). date will be in mm/dd/yyyy format.

function daysUntil2021(date) {

    let from = new Date(date);       // Date to compare to.
    let to = new Date("01/01/2021"); // Date that gets checked against. 

    let diff = to - from;            // Calculate the differnce in milliseconds.

    // Calculates milliseconds / day to get the number of days. 
    let totalDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    // 1000 = Milliseconds, 3600 = (seconds * minutes), 24 = hours

    console.log(totalDays, "days");
}

daysUntil2021("12/28/2020") // ➞ "3 days"
daysUntil2021("1/1/2020") // ➞ "366 days"
daysUntil2021("2/28/2020") // ➞ "308 days"


