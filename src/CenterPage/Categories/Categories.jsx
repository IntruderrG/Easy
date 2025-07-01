// import React from "react";

// import consultIcon from "../Categories/Images/consulting.png";
// import reminderIcon from "./Images/notification.png";
// import bpIcon from "./Images/arm.png";
// import fallDataIcon from "./Images/fall.png";
// import connectIcon from "./Images/link.png";
// import medicinesIcon from "./Images/pill.png";
// import hospitalsIcon from "./Images/hospital.png";
// import locateIcon from "./Images/pointer.png";
// import { useNavigate } from "react-router-dom";
// function Categories() {
//   const navigate = useNavigate();
//   return (
//     <div className="grid grid-cols-4 grid-rows-2  h-55 w-screen  p-2">
//       <div className="  flex flex-col items-center justify-center gap-1">
//         <div className="h-[70%] w-[70%] bg-[#D9D7A9] rounded-md transition-all active:scale-90 flex items-center justify-center pl-2">
//           <img src={consultIcon} alt="" className=" h-[80%] w-[100%]" />
//         </div>
//         <div className="h-[10%] w-[90%] rounded-md flex items-center justify-center text-[#7E7D7D] ">
//           Consult
//         </div>
//       </div>
//       <div className=" flex flex-col items-center justify-center gap-1">
//         <div className="h-[70%] w-[70%]   bg-[#D9D7A9] rounded-md transition-all active:scale-90 flex items-center justify-center">
//           <img src={reminderIcon} alt="" className="h-[80%] w-[80%]" />
//         </div>
//         <div className="h-[10%] w-[90%] rounded-md flex items-center justify-center text-[#7E7D7D]">
//           Reminder
//         </div>
//       </div>
//       <div className=" flex flex-col items-center justify-center gap-1">
//         <div className="h-[70%] w-[70%]  bg-[#D9D7A9] rounded-md transition-all active:scale-90 flex items-center justify-center">
//           <img src={bpIcon} alt="" className="h-[80%] w-[80%]" />
//         </div>
//         <div className="h-[10%] w-[90%] rounded-md flex items-center justify-center text-[#7E7D7D]  ">
//           BP
//         </div>
//       </div>
//       <div className=" flex flex-col items-center justify-center gap-1">
//         <div className="h-[70%] w-[70%]  bg-[#D9D7A9] rounded-md transition-all active:scale-90 flex items-center justify-center">
//           <img src={fallDataIcon} alt="" className="h-[80%] w-[80%]" />
//         </div>
//         <div className="h-[10%] w-[90%] rounded-md flex items-center justify-center text-[#7E7D7D]">
//           Fall Data
//         </div>
//       </div>
//       <div className=" flex flex-col items-center justify-center gap-1">
//         <div className="h-[70%] w-[70%] bg-[#D9D7A9] rounded-md transition-all active:scale-90 flex items-center justify-center">
//           <img src={connectIcon} alt="" className="h-[70%] w-[70%]" />
//         </div>
//         <div className="h-[10%] w-[90%]rounded-md flex items-center justify-center text-[#7E7D7D]">
//           Connect
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center gap-1">
//         <div className="h-[70%] w-[70%]  bg-[#D9D7A9] rounded-md transition-all active:scale-90 flex items-center justify-center">
//           <img src={medicinesIcon} alt="" className="h-[80%] w-[80%]" />
//         </div>
//         <div className="h-[10%] w-[90%]  rounded-md flex items-center justify-center text-[#7E7D7D]">
//           Medicines
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center gap-1">
//         <div className="h-[70%] w-[70%]  bg-[#D9D7A9] rounded-md transition-all active:scale-90 flex items-center justify-center">
//           <img src={hospitalsIcon} alt="" className="h-[80%] w-[80%]" />
//         </div>
//         <div className="h-[10%] w-[90%]rounded-md flex items-center justify-center text-[#7E7D7D] ">
//           Hospitals
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center gap-1">
//         <div
//           className="h-[70%] w-[70%]  bg-[#D9D7A9] rounded-md transition-all active:scale-90 flex items-center justify-center "
//           onClick={() => navigate("/location")}
//         >
//           <img src={locateIcon} alt="" className="h-[80%] w-[80%]" />
//         </div>
//         <div className="h-[10%] w-[90%]  rounded-md  flex items-center justify-center text-[#7E7D7D] ">
//           Track Me
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Categories;

//Code is shortened for clarity and readability
//

// import React from "react";
// import { useNavigate } from "react-router-dom";

// // Import icons
// import consultIcon from "../Categories/Images/consulting.png";
// import reminderIcon from "./Images/notification.png";
// import bpIcon from "./Images/arm.png";
// import fallDataIcon from "./Images/fall.png";
// import connectIcon from "./Images/link.png";
// import medicinesIcon from "./Images/pill.png";
// import hospitalsIcon from "./Images/hospital.png";
// import locateIcon from "./Images/pointer.png";

// const categories = [
//   {
//     id: 1,
//     icon: consultIcon,
//     label: "Consult",
//     bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
//   },
//   {
//     id: 2,
//     icon: reminderIcon,
//     label: "Reminder",
//     bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
//   },
//   {
//     id: 3,
//     icon: bpIcon,
//     label: "BP Monitor",
//     bgColor: "bg-gradient-to-br from-red-100 to-red-200",
//   },
//   {
//     id: 4,
//     icon: fallDataIcon,
//     label: "Fall Detection",
//     bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
//   },
//   {
//     id: 5,
//     icon: connectIcon,
//     label: "Connect",
//     bgColor: "bg-gradient-to-br from-green-100 to-green-200",
//   },
//   {
//     id: 6,
//     icon: medicinesIcon,
//     label: "Medicines",
//     bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-200",
//   },
//   {
//     id: 7,
//     icon: hospitalsIcon,
//     label: "Hospitals",
//     bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
//   },
//   {
//     id: 8,
//     icon: locateIcon,
//     label: "Track Me",
//     bgColor: "bg-gradient-to-br from-teal-100 to-teal-200",
//     path: "/location",
//   },
// ];

// function Categories() {
//   const navigate = useNavigate();

//   const handleClick = (path) => {
//     if (path) {
//       navigate(path);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Health Services
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="group flex flex-col items-center"
//             onClick={() => handleClick(category.path)}
//           >
//             <div
//               className={`w-20 h-20 ${category.bgColor} rounded-2xl shadow-md
//               group-hover:shadow-lg transition-all duration-300 ease-in-out
//               transform group-hover:-translate-y-1 flex items-center justify-center`}
//             >
//               <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
//                 <img
//                   src={category.icon}
//                   alt={category.label}
//                   className="w-10 h-10 object-contain drop-shadow-sm"
//                 />
//               </div>
//             </div>
//             <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
//               {category.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Categories;
import React from "react";
import { useNavigate } from "react-router-dom";

// Import icons
import consultIcon from "../Categories/Images/consulting.png";
import reminderIcon from "./Images/notification.png";
import bpIcon from "./Images/arm.png";
import fallDataIcon from "./Images/fall.png";
import connectIcon from "./Images/link.png";
import medicinesIcon from "./Images/pill.png";
import hospitalsIcon from "./Images/hospital.png";
import locateIcon from "./Images/pointer.png";

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto px-4 py-4">
      <div className="grid grid-cols-4 gap-4">
        {/* Reminders - Featured Category */}

        {/* Regular Categories */}
        <CategoryItem
          icon={consultIcon}
          label="Consult"
          onClick={() => navigate("/auth")}
        />
        <CategoryItem
          icon={bpIcon}
          label="BP Monitor"
          onClick={() => navigate("/bp")}
        />
        <CategoryItem
          icon={fallDataIcon}
          label="Fall Detection"
          onClick={() => navigate("/fall-detection")}
        />
        <CategoryItem
          icon={connectIcon}
          label="Connect"
          onClick={() => navigate("/connect")}
        />
        <CategoryItem
          icon={medicinesIcon}
          label="Medicines"
          onClick={() => window.open("https://www.1mg.com/", "_blank")}
        />
        <CategoryItem
          icon={hospitalsIcon}
          label="Hospitals"
          onClick={() => navigate("/hospitals")}
        />
        <CategoryItem
          icon={locateIcon}
          label="Track Me"
          onClick={() => navigate("/location")}
        />
      </div>
    </div>
  );
}

// Reusable Category Item Component
function CategoryItem({ icon, label, onClick }) {
  return (
    <div
      className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-gray-100 rounded-full p-3 mb-2">
        <img src={icon} alt={label} className="w-6 h-6" />
      </div>
      <span className="text-xs font-medium text-gray-700 text-center">
        {label}
      </span>
    </div>
  );
}

export default Categories;
