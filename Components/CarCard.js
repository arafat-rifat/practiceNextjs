import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const CarCard = ({ title, CarName, Price }) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-slate-600">
      <img
        src="/hero.png"
        alt="carpic"
        className="object-cover object-center w-full rounded-md h-72"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium text-white">{title}</span>
        <h2 className="text-xl font-semibold text-white">{CarName}</h2>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-white text-bold text-start">Price -${Price} </p>
        <Link href="/About">
          <CustomButton title="see more" />
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
