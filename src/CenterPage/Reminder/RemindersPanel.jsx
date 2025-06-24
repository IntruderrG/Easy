import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RemindersPanel() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState([false, false, false]);

  const reminders = [
    {
      time: "09:00",
      title: "Morning medication",
      category: "Health",
    },
    {
      time: "14:30",
      title: "Afternoon check-in",
      category: "Wellness",
    },
    {
      time: "20:00",
      title: "Evening prescription",
      category: "Health",
    },
  ];

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div className="p-3">
      <div
        className="relative bg-olive-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer mb-8 border border-olive-200"
        onClick={() => navigate("/reminders")}
      >
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-olive-100/30 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-olive-100/20 rounded-full -ml-20 -mb-20"></div>

        {/* Sophisticated header */}
        <div className="relative bg-olive-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-olive-600 mr-3 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-olive-300 animate-pulse"></div>
              </div>
              <h3 className="font-medium text-olive-50 text-lg">
                Active Reminders
              </h3>
            </div>
            <span className="text-xs font-medium bg-olive-600 text-olive-100 px-3 py-1 rounded-full">
              {checked.filter((c) => !c).length} pending
            </span>
          </div>
        </div>

        {/* Elegant list items */}
        <div className="relative divide-y divide-olive-100">
          {reminders.map((reminder, index) => (
            <div
              key={index}
              className={`px-6 py-4 group transition-all duration-200 ${
                checked[index] ? "bg-olive-50/50" : "bg-white hover:bg-olive-50"
              }`}
              onClick={(e) => !e.target.closest("button") && toggleCheck(index)}
            >
              <div className="flex items-start">
                {/* Refined checkbox */}
                <button
                  className={`relative mt-0.5 flex-shrink-0 w-6 h-6 rounded-md border-2 transition-all ${
                    checked[index]
                      ? "border-olive-500 bg-olive-100"
                      : "border-olive-300 bg-white hover:border-olive-400"
                  } flex items-center justify-center`}
                  onClick={() => toggleCheck(index)}
                >
                  {checked[index] && (
                    <span className="text-olive-700 font-bold animate-pop-in">
                      ✓
                    </span>
                  )}
                </button>

                <div className="ml-4 flex-1">
                  <div className="flex items-start">
                    <span className="text-xl mr-3 mt-0.5 text-olive-600">
                      {reminder.icon}
                    </span>
                    <div>
                      <div className="flex items-baseline flex-wrap">
                        <p
                          className={`font-medium ${
                            checked[index]
                              ? "text-olive-400 line-through"
                              : "text-olive-800"
                          }`}
                        >
                          {reminder.title}
                        </p>
                        <span className="ml-2 text-xs font-medium text-olive-700 bg-olive-100 px-2 py-0.5 rounded-full">
                          {reminder.category}
                        </span>
                      </div>
                      <p
                        className={`text-sm mt-1 ${
                          checked[index] ? "text-olive-300" : "text-olive-500"
                        }`}
                      >
                        {reminder.time}
                      </p>
                    </div>
                  </div>
                </div>

                {!checked[index] && (
                  <button
                    className="text-olive-300 hover:text-olive-600 transition-colors"
                    onClick={() => toggleCheck(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Understated CTA */}
        <div
          className="relative px-6 py-3 text-center bg-olive-600 hover:bg-olive-700 transition-all duration-300 group"
          onClick={() => navigate("/reminders")}
        >
          <p className="text-sm font-medium text-olive-100 flex items-center justify-center">
            Complete your tasks
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </div>

        {/* Celebration effect when all checked */}
        {checked.every((c) => c) && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-olive-50/30">
            <div className="text-2xl text-olive-500 animate-bounce">✓</div>
          </div>
        )}

        {/* Animation styles */}
        <style jsx>{`
          @keyframes pop-in {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            80% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
            }
          }
          .animate-pop-in {
            animation: pop-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}

export default RemindersPanel;
