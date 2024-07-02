document.addEventListener("DOMContentLoaded", function () {
  const currentDay = document.querySelector('[data-testid="currentDay"]');
  const currentTime = document.querySelector('[data-testid="currentTime"]');

  function updateDateTime() {
    const current = new Date();

    const options = { weekday: "long", timezone: "UTC" };
    const weekday = new Intl.DateTimeFormat("en-US", options).format(current);
    const Time = current.toLocaleTimeString();

    currentDay.textContent = weekday;
    currentTime.textContent = Time;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});
