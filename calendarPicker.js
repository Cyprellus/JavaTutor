flatpickr("#datetime", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  minTime: "11:00",
  maxTime: "13:00",
  time_24hr: false,
  minuteIncrement: 30,
  disable: [
    function(date) {
      // Disable Friday (5), Saturday (6), Sunday (0)
      return [0, 5, 6].includes(date.getDay());
    }
  ],
  onChange: function(selectedDates, dateStr, instance) {
    const selected = selectedDates[0];
    const day = selected.getDay();
    const hour = selected.getHours();
    const minute = selected.getMinutes();

    const isValidDay = [1, 2, 3, 4].includes(day); // Mon–Thu
    const isValidTime = (hour === 11 || hour === 12) || (hour === 13 && minute === 0);

    const status = document.getElementById("status");
    if (isValidDay && isValidTime) {
      status.textContent = "✅ Time slot is available!";
      status.style.color = "lightgreen";
    } else {
      status.textContent = "⛔ Sorry, tutoring is only available Monday–Thursday between 11:00 AM and 1:00 PM.";
      status.style.color = "salmon";
    }
  }
});
