import React, { useState } from "react";
import DarkToggle from "./DarkToggle.jsx";

export default function Form({ setShowModal, setData, darkMode, setDarkMode }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.agree) {
      alert("Please accept terms!");
      return;
    }

    setData(form);
    setShowModal(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow w-96">
      <h2 className="text-xl font-bold mb-4">User Form</h2>

      <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          required
        />

        {/* Gender */}
        <select
          name="gender"
          onChange={handleChange}
          className="p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-700"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Checkbox */}
        <label className="flex gap-2 items-center">
          <input type="checkbox" name="agree" onChange={handleChange} />
          Agree Terms
        </label>

        {/* Button */}
        <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}