function applyTimeTheme() {
  const background = document.getElementById("background");
  const hour = new Date().getHours();

  background.className = "background"; // reset

  if (hour >= 5 && hour < 9) {
    background.classList.add("morning");
  } else if (hour >= 9 && hour < 17) {
    background.classList.add("midday");
  } else if (hour >= 17 && hour < 20) {
    background.classList.add("evening");
  } else {
    background.classList.add("night");
  }
}

export function applyTheme() {
  try {
    applyTimeTheme();
  } catch (err) {
    console.error("Theme error:", err);
    const background = document.getElementById("background");
    background.className = "background midday"; // fallback
  }
}
