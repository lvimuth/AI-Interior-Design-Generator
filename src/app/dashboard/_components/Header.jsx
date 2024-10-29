"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} width={40} height={40} alt="" />
        <h2 className="font-bold text-lg">AI Room Design</h2>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
