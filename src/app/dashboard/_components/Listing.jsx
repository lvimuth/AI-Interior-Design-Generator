"use client";

import { useUser } from "@clerk/clerk-react";
import React from "react";

function Listing() {
  const { user } = useUser();

  // Wait until `user` is loaded
  if (!user) {
    return <p>Loading...</p>; // You can display a loading indicator here
  }

  return (
    <div>
      <h2 className="font-bold text-3xl">Hello, {user.fullName}</h2>
    </div>
  );
}

export default Listing;
