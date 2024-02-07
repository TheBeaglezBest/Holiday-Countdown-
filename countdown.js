// Array of holidays and their dates
const holidays = [
  { name: 'Easter', date: '2022-04-17' },
  { name: 'Thanksgiving', date: '2022-11-24' },
  { name: 'Christmas', date: '2022-12-25' },
  { name: "Saint Patrick's Day", date: '2023-03-17' },
  { name: 'Halloween', date: '2023-10-31' },
  { name: 'Eid al-Fitr', date: '2023-05-24' },
  { name: 'Diwali', date: '2023-11-14' },
  { name: 'Chinese New Year', date: '2024-01-25' },
  { name: 'Hanukkah', date: '2024-12-22' },
  { name: "New Year's Day", date: '2025-01-01' },
  { name: 'Independence Day (U.S.A.)', date: '2025-07-04' }
];

// Function to calculate the time remaining until a holiday
function getTimeRemaining(endDate) {
  const totalSeconds = Date.parse(endDate) - Date.now();
  const days = Math.floor(totalSeconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((totalSeconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((totalSeconds % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

// Function to update the countdown display
function updateCountdown() {
  const currentDate = new Date();
  let nextHoliday = holidays.find(holiday => Date.parse(holiday.date) > currentDate);

  if (!nextHoliday) {
    nextHoliday = holidays[0];
  }

  const countdownElement = document.getElementById('countdown');
  countdownElement.textContent = `${nextHoliday.name} in ${getTimeRemaining(nextHoliday.date).days} days`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
