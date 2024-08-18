import React from "react";
import MainSideBar from "../SideBar/MainSideBar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <MainSideBar />
      <main className="flex-1 bg-indigo-900 h-screen overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
