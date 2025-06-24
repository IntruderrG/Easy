import React from "react";
import TopSection from "../TopSection/TopSection"; // Assuming this path is correct
import Categories from "../Categories/Categories"; // Assuming this path is correct
import Reminder2 from "../Reminder/RemindersPanel"; // Assuming this path is correct
import RemindersPanel from "../Reminder/RemindersPanel";

function Home() {
  return (
    <>
      <div className="h-15 w-full"></div>
      <div className="w-screen flex flex-col gap-3 ">
        <div className="h-auto ">
          <TopSection />
        </div>
        <div className="w-full flex justify-center items-center mt-4 mb-1">
          <div
            className="w-[95%] rounded-xl pl-4 pt-4 pb-4 pr-3 shadow-sm transition-all duration-200 cursor-pointer flex justify-between items-stretch relative overflow-hidden"
            onClick={() => navigate("/categories")}
            style={{
              background: "rgba(239, 246, 238, 0.3)", // olive-50 with transparency
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Noise texture */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.10'/%3E%3C/svg%3E")`,
                opacity: 0.15,
              }}
            ></div>

            {/* Backdrop blur */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex items-center">
              <h3
                className="text-3xl font-semibold"
                style={{ color: "#3a4a3a" }} // olive-800
              >
                Categories
              </h3>
            </div>

            {/* Olive bars container */}
            <div className="relative z-10 flex h-auto my-[-1rem]">
              <div
                className="w-2 mr-[2px]"
                style={{
                  backgroundColor: "rgba(101, 118, 74, 0.8)", // olive-600/80
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              ></div>
              <div
                className="w-2 mr-[2px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              ></div>
              <div
                className="w-2"
                style={{
                  backgroundColor: "rgba(118, 136, 89, 0.8)", // olive-500/80
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              ></div>
            </div>

            {/* Subtle reflection */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.1), transparent)",
              }}
            ></div>
          </div>
        </div>
        <div className="h-auto">
          <Categories />
        </div>
        <div className="w-full flex justify-center items-center mt-4 mb-1">
          <div
            className="w-[95%] rounded-xl pl-4 pt-4 pb-4 pr-3 shadow-sm transition-all duration-200 cursor-pointer flex justify-between items-stretch relative overflow-hidden"
            onClick={() => navigate("/categories")}
            style={{
              background: "rgba(239, 246, 238, 0.3)", // olive-50 with transparency
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Noise texture */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.10'/%3E%3C/svg%3E")`,
                opacity: 0.15,
              }}
            ></div>

            {/* Backdrop blur */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex items-center">
              <h3
                className="text-3xl font-semibold"
                style={{ color: "#3a4a3a" }} // olive-800
              >
                Reminders
              </h3>
            </div>

            {/* Olive bars container */}
            <div className="relative z-10 flex h-auto my-[-1rem]">
              <div
                className="w-2 mr-[2px]"
                style={{
                  backgroundColor: "rgba(101, 118, 74, 0.8)", // olive-600/80
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              ></div>
              <div
                className="w-2 mr-[2px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              ></div>
              <div
                className="w-2"
                style={{
                  backgroundColor: "rgba(118, 136, 89, 0.8)", // olive-500/80
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              ></div>
            </div>

            {/* Subtle reflection */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.1), transparent)",
              }}
            ></div>
          </div>
        </div>

        <div className="h-auto">
          <RemindersPanel />
        </div>
      </div>
    </>
  );
}

export default Home;
