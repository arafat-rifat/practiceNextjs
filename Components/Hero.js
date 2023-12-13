import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full mt-3 bg-slate-400">
      <div className="w-[1400px] mx-auto">
        <div className="flex justify-between gap-5 items-center">
          {/* left */}
          <div className="w-full bg-blue-400">
            <Image
              src="/hero.png"
              alt="car picture"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          {/* Right */}
          <div className="w-full">
            <div className="flex flex-col justify-between items-center ">
              <h1 className="text-4xl text-start text-white font-semibold">
                Everything you need to know about car rental !!!
              </h1>

              <div className="flex justify-between items-center gap-3 mt-20">
                <CustomButton title="Book Now" />
                <Link href="/registration">
                  <CustomButton title="Registration Now" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
