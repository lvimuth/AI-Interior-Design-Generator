"use client";

import { UserDetailContext } from "@/app/_context/UserDetailsContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useContext } from "react";

function Header() {
  const { userDetail, setUserDetails } = useContext(UserDetailContext);


  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} width={40} height={40} alt="" />
        <h2 className="font-bold text-lg">AI Room Design</h2>
      </div>
      <Button variant="ghost" className="rounded-full text-purple-500">
        Buy More Credits
      </Button>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
          <Image src={"/star.png"} width={20} height={20} alt="" />
          <h2>{userDetail?.credits ?? 0}</h2>{" "}
          {/* Add optional chaining and default value */}
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
