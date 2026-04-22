import React, { useState } from "react";
import Form from "./components/Form.jsx";
import Modal from "./components/Modal.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white">
        <Form
          setShowModal={setShowModal}
          setData={setData}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {showModal && (
          <Modal data={data} setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
}