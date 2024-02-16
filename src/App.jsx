import React from "react";
import logo from "./assets/S-bgr.png";
import github_logo from "./assets/github.svg";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import About from "./components/About";
import KnowMe from "./components/KnowMe";

const App = () => {
  const scrollToComponent = (component) => {
    const element = document.getElementById(component);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient w-full">
      <nav
        className={`fixed  w-full top-0 z-50 flex justify-between px-10  transition-all duration-500 ease-in-out border-b border-0.2 border-richblack-700 bg-richblack-800 bg-opacity-20 backdrop-blur-md `}
      >
        <div>
          <img src={logo} alt="" className="h-14" />
        </div>
        <div className="flex gap-10 px-8">
          <ul className="flex gap-8 ">
            <li
              onClick={() => scrollToComponent("about")}
              className="text-richblack-25 pt-3 text-m font-semibold cursor-pointer transition duration-400 hover:text-tailwindblue-200"
            >
              About
            </li>
            <li
              onClick={() => scrollToComponent("skills")}
              className="text-richblack-25 pt-3 text-m font-semibold cursor-pointer transition duration-400 hover:text-tailwindblue-200"
            >
              Skills
            </li>
            <li
              onClick={() => scrollToComponent("projects")}
              className="text-richblack-25 pt-3 text-m font-semibold cursor-pointer transition duration-400 hover:text-tailwindblue-200"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToComponent("education")}
              className="text-richblack-25 pt-3 text-m font-semibold cursor-pointer transition duration-400 hover:text-tailwindblue-200"
            >
              Education
            </li>
          </ul>
          <button className="text-white group transition-all duration-300 hover:text-gray-300 ">
            Github
          </button>
        </div>
      </nav>

      {/* Experience Component */}
      <About></About>

      <Skills ></Skills>

      <KnowMe></KnowMe>

      {/* Projects Component */}
      <section
        id="projects"
        className="h-screen flex flex-col justify-center items-center bg-gray-200 p-20 border-b-1 border-gray-300"
      >
        <h2 className="mb-10 text-3xl text-gray-700">Projects</h2>
        <div className="mb-6">
          <h3 className="text-xl text-gray-600">Project 1</h3>
          <p className="text-gray-700">Description of Project 1...</p>
        </div>
        <div>
          <h3 className="text-xl text-gray-600">Project 2</h3>
          <p className="text-gray-700">Description of Project 2...</p>
        </div>
      </section>

      {/* Education Component */}
      <section
        id="education"
        className="h-screen flex flex-col justify-center items-center bg-gray-200 p-20"
      >
        <h2 className="mb-10 text-3xl text-gray-700">Education</h2>
        <div className="text-gray-600">
          <h3 className="text-xl mb-2">University XYZ</h3>
          <p>Bachelor's Degree in Computer Science</p>
        </div>
      </section>
    </div>
  );
};

export default App;

