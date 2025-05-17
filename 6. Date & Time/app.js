// 📅 Creating Dates

// Current date & time:

const now = new Date();

console.log(now);

// Specific date:

// year, month, day, hours, minutes, secods, milliseconds

const d = new Date(2023, 11, 25); // Dec 25, 2023 (months: 0-11)

console.log(d);

// From ISO string:

// const d = new Date("2025-05-17T10:30:00");

// 🕒 Getting Date & Time Parts

const date = new Date();

date.getFullYear(); // Year (e.g. 2025)
date.getMonth(); // Month (0-11)
date.getDate(); // Day of month (1-31)
date.getDay(); // Weekday (0-6, Sun-Sat)
date.getHours(); // Hour (0-23)
date.getMinutes(); // Minutes (0-59)
date.getSeconds(); // Seconds (0-59)

// 🛠 Setting Date & Time

date.setFullYear(2026);
date.setMonth(0); // January
date.setDate(1);

// 🧾 Formatting Dates

date.toDateString(); // "Sat May 17 2025"
date.toTimeString(); // "10:30:00 GMT+..."
date.toISOString(); // "2025-05-17T10:30:00.000Z"

// ⏱ Timestamps

Date.now(); // Current timestamp (ms since Jan 1, 1970)
date.getTime(); // Timestamp from a Date object

// 📌 Notes

//     Months are zero-based (January = 0).

//     Use toLocaleString() or libraries like date-fns, Luxon, or Moment.js for formatting.
