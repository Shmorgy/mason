import React from "react";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex-1">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
