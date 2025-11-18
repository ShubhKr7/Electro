import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Silk from "../components/Silk"; // make sure this path matches your file

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Silk background */}
      <div className="fixed inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#3ab7bf"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Page content */}
      <div className="flex flex-col min-h-screen bg-transparent text-white transition-colors duration-300">
        <Header />

        <main className="flex-grow px-4 md:px-0 py-6">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
