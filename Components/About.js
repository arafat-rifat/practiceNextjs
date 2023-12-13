import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-6 dark:bg-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="/hero.png"
            />
            <Link href="/About/cart">
              <CustomButton title="Add to cart" />
            </Link>
          </div>

          <div className="flex flex-col">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="/hero.png"
            />
            <CustomButton title="Add to cart" />
          </div>
          <div className="flex flex-col">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="/hero.png"
            />
            <CustomButton title="Add to cart" />
          </div>
          <div className="flex flex-col">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="/hero.png"
            />
            <CustomButton title="Add to cart" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
