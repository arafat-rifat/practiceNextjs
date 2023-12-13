import React from "react";

const CustomButton = ({ title, style }) => {
  return (
    <button className="text-black text-lg font-bold px-5 py-2 bg- bg-white border border-solid border-x-white Rounded-lg">
      {title}
    </button>
  );
};

export default CustomButton;
