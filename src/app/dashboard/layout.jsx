import React from "react";
import Header from "./_components/Header";

function DashboardLayout({ childern }) {
  return (
    <div>
      <Header />
      {childern}
    </div>
  );
}

export default DashboardLayout;
