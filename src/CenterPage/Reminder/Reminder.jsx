import React from "react";
let randomNumber = () => {
  return 20 * (Math.floor(Math.random() * (10 - 3 + 1)) + 3); //Inner logic takes from 3 to 10
};

let getHeightWidth = () => {
  let randValue = randomNumber();
  let store = { height: `${randValue}px`, width: `${randValue}px` };
  return store;
};
function Reminder() {
  let dimenisions = {
    dim1: getHeightWidth(),
    dim2: getHeightWidth(),
    dim3: getHeightWidth(),
    dim4: getHeightWidth(),
    dim5: getHeightWidth(),
  };
  return (
    <>
      <div className="relative">
        <div className="outer-circle">
          <div
            className="w-40 bg-easy-200 absolute top-0 left-0 flex items-center justify-center text-2xl font-bold text-white"
            style={{
              height: dimenisions.dim1.height,
              width: dimenisions.dim1.width,
              borderRadius: "50%",
            }}
          >
            1
          </div>
        </div>
        <div className="outer-circle">
          <div
            className="w-40 bg-easy-300 absolute top-25x left-50 flex items-center justify-center text-2xl font-bold text-white"
            style={{
              height: dimenisions.dim2.height,
              width: dimenisions.dim2.width,
              borderRadius: "50%",
            }}
          >
            2
          </div>
        </div>
        <div className="outer-circle">
          <div
            className="w-40 bg-easy-900 top-20 leftt-20 flex items-center justify-center text-2xl font-bold text-white"
            style={{
              height: dimenisions.dim3.height,
              width: dimenisions.dim3.width,
              borderRadius: "50%",
            }}
          >
            3
          </div>
        </div>
        <div className="outer-circle">
          <div
            className="w-40 bg-easy-600 absolute flex items-center justify-center text-2xl font-bold text-white"
            style={{
              height: dimenisions.dim4.height,
              width: dimenisions.dim4.width,
              borderRadius: "50%",
            }}
          >
            4
          </div>
        </div>
        <div className="outer-circle">
          <div
            className="w-40 bg-easy-800 absolute top-20 left-40 flex items-center justify-center text-2xl font-bold text-white"
            style={{
              height: dimenisions.dim5.height,
              width: dimenisions.dim5.width,
              borderRadius: "50%",
            }}
          >
            5
          </div>
        </div>
      </div>
    </>
  );
}

export default Reminder;
