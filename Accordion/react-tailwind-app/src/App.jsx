import React, { useState } from "react";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [1, 2, 3, 4];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 gap-6">
      {/* Header */}
      <span className="bg-blue-900 text-white px-6 py-3 rounded-xl text-center text-lg font-semibold shadow-md w-full max-w-md">
        Enable Multi Selection
      </span>

      {/* Button list */}
      {items.map((item, index) => (
        <div key={item} className="w-full max-w-md flex flex-col items-center gap-2">
          <div className="bg-blue-700 text-white flex justify-between items-center w-full rounded-xl p-4 shadow hover:bg-blue-800 transition-colors duration-300">
            <h1 className="text-md font-medium">Click on button {item}</h1>
            <button
              onClick={() =>
                setActiveIndex(item === activeIndex ? null : index)
              }
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
            >
              +
            </button>
          </div>

          {/* Conditional span */}
          {activeIndex === index && (
            <div className="bg-gray-200 text-gray-800 w-full rounded-xl p-3 text-center shadow-md">
              New Option Opened for Item {item}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

