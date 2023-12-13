import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full">
      <div className="w-[1400px] mx-auto">
        <div className="flex justify-between items-center p-4">
          {/* Left */}
          <div className="">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </div>
          {/* Right */}
          <div>
            <ul className="flex gap-20 text-xl font-bold">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/About">
                <li>About</li>
              </Link>
              <Link href="/contruct">
                <li>Contruct</li>
              </Link>
              <li>Support</li>
              <li>Product</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
