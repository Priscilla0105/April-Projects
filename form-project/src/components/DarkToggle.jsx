import React from "react";

export default function DarkToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="mb-3 bg-blue-600 text-white px-3 py-1 rounded"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}