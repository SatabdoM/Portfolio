import React from "react";
import { Tab } from "@headlessui/react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="h-max w-full flex flex-col  justify-center items-center  p-8"
    >
      <div className="w-full md:w-10/12 h-full ">
        <h2 className="text-4xl text-center font-semibold  cursor-pointer hover:text-tailwindblue-200  transition duration-500 p-4">
          Skills
        </h2>
        <MyTabs />
      </div>
    </div>
  );
};

function MyTabs() {
  return (
    <Tab.Group >
      <div className="flex flex-col items-center h-lvh md:h-full ">
        <Tab.List className="max-w-96 w-3/4 rounded-md border border-richblack-700 flex  overflow-hidden text-lg font-bold">
        <Tab className=" group w-full">
            {({ selected }) => (
              <button
                className={`w-full ${
                  selected
                    ? "text-tailwindblue-800 font-bold border-richblack-700 p-3 bg-tailwindblue-200"
                    : ""
                }`}
              >
                Web
              </button>
            )}
          </Tab>
          <Tab className=" group w-full">
            {({ selected }) => (
              <button
                className={`w-full ${
                  selected
                    ? "text-tailwindblue-800 font-bold border-richblack-700 p-3 bg-tailwindblue-200"
                    : ""
                }`}
              >
                Dsa
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels className="h-full w-full mt-2 p-2">

          <Tab.Panel className="h-full flex flex-col flex-wrap justify-start items-center md:flex-row md:justify-center md:items-start">
          
          <div className="h-60 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 p-4  transform group   transition duration-500">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Front-End
                </h2>
              </div>
            </div>
            <div className="h-60 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 p-4  transform group   transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Back-End
                </h2>
              </div>
            </div>
            <div className="h-60 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 p-4  transform group   transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Others
                </h2>
              </div>
            </div>


            
          </Tab.Panel>

          <Tab.Panel className="h-full flex flex-col justify-start items-center md:flex-row flex-wrap md:justify-center md:items-start">
          <div className="h-60 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 p-4  transform group   transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Leetcode
                </h2>
              </div>
            </div>
            <div className="h-60 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 p-4  transform group   transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  CodeForces
                </h2>
              </div>
            </div>
            
            
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}

export default Skills;
