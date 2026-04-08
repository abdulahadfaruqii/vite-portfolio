import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import ImgSection from "./screens/ImgSection";
import ProjectSection from "./screens/ProjectSection";
import ClientReviewSection from "./screens/ClientReviewSection";
import WorkExperienceSection from "./screens/WorkExperienceSection";
import MyApproach from "./screens/MyApproach";
import NextLevel from "./screens/NextLevel";

function App() {
  return (
    <main>
      <div className="max-w-lg mx-auto">
        <Navbar />
      </div>

      <h2 className="text-white font-medium mt-7 text-2xl">
        Crafting Dynamic Web Solutions with Nextjs Expertise
      </h2>

      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-2 text-center leading-tight">
        Transforming Concepts into <br /> Seamless
        <span className="text-secondary"> User Experiences</span>
      </h1>
      <h2 className="text-white mt-5 py-1 text-2xl">
        Hi Im Abdul Ahad Farooqi a React Js Developer based in Karachi
      </h2>

      <div className="flex justify-center mt-5">
        {/* Gradient border wrapper */}
        <div
          className="group rounded-full p-px transition-all duration-300"
          style={{
            background:
              "linear-gradient(92.44deg, rgba(105, 113, 162, 0.16) 21.16%, rgba(39, 42, 60, 0.37) 88.63%)",
          }}
        >
          <button
            type="submit"
            className="flex items-center gap-3 rounded-full px-6 py-4 text-white
                 bg-slate-900/80 backdrop-blur-md shadow-2xl
                 transition-all duration-300
                 group-hover:shadow-[0_0_12px_rgba(96,165,250,0.6)]
                cursor-pointer"
            style={{
              background:
                "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
            }}
          >
            <span>See my work</span>
            <img src="/Arrow.png" alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
      <ImgSection />
      <ProjectSection />
      <ClientReviewSection />
      <WorkExperienceSection />
      <MyApproach />
      
      <NextLevel />
    </main>
  );
}

export default App;
