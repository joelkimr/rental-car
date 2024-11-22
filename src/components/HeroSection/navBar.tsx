"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../images/logo/logo.png";
import Link from "next/link";
import { UserMenuButton } from "./user-menu-button";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full flex mx-auto justify-around p-3 space-x-[35rem] border-[1px] border-b-black/10 header bg-white/70 fixed top-0 z-50 ${
        sticky ? "border-[1px] border-b-black/10 shadow-sm" : ""
      }`}
    >
      <div>
        <Link href="/">
          <Image
            src={Logo}
            alt="logo-img"
            width={120}
            height={20}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="z-50">
        <UserMenuButton />
      </div>
    </div>
  );
};

export default NavBar;
