import React from 'react';
import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { RightSection } from "@/components/RightSection"; // Use named import

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white relative bg-black">
      <div className="max-w-[72vw] w-full h-full flex relative border-1">
        <LeftSidebar />
        <MainComponent />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
