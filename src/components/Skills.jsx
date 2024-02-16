import React from "react";
import { Tab } from "@headlessui/react";
import technologies from './techstack';

const Skills = () => {
  return (
    <div
      id="skills"
      className=" h-max pt-12  flex flex-col  items-center  skills-page "
    >
      <div className="w-11/12">
        <h2 className="text-5xl text-center font-semibold  cursor-pointer hover:text-tailwindblue-200  transition duration-500 p-4">
          Skills
        </h2>
        <MyTabs />
      </div>
    </div>
  );
};

function MyTabs() {
  const frontend = technologies.frontend;
  return (
    <Tab.Group>
      <div className="flex flex-col items-center  md:h-full p-2">
        <Tab.List className="max-w-96 w-3/4 rounded-md border border-richblack-700 flex overflow-hidden text-xl font-bold  ">
          <Tab className=" group w-full">
            {({ selected }) => (
              <button
                className={`w-full p-4  ${
                  selected
                    ? "text-tailwindblue-800 font-bold border-richblack-700 bg-tailwindblue-200"
                    : ""
                }`}
              >
                Dev
              </button>
            )}
          </Tab>
          <Tab className=" group w-full">
            {({ selected }) => (
              <button
                className={`w-full p-4 ${
                  selected
                    ? "text-tailwindblue-800 font-bold border-richblack-700  bg-tailwindblue-200"
                    : ""
                }`}
              >
                Dsa
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels className="h-full w-full mt-2 p-2">

          <Tab.Panel className="h-full flex flex-col flex-wrap justify-center items-center md:flex-row lg:justify-center lg:items-start">
            
            <div className="h-80 w-80 md:h-96 md:w-96 p-4  transform group   transition duration-500">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Front-End
                </h2>
                <div className="p-2">
                {
                  frontend.map((item, index) => (
                    <Tech key={index} item={item} />
                  ))

                  
                }
                </div>
                
              </div>
            </div>
            <div className="h-80 w-80 md:h-96 md:w-96 p-4  transform group  transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Back-End
                </h2>
              </div>
            </div>

            <div className="h-80 w-80 md:h-96 md:w-96 p-4  transform group  transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Dev-Ops
                </h2>
              </div>
            </div>

            <div className="h-80 w-80 md:h-96 md:w-96 p-4  transform group  transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Tools
                </h2>
              </div>
            </div>
            
            
          </Tab.Panel>

          <Tab.Panel className="h-full flex flex-col justify-start items-center md:flex-row flex-wrap md:justify-center md:items-start">
          <div className="h-80 w-80 md:h-96 md:w-96 p-4  transform group  transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Leetcode
                </h2>
              </div>
            </div>
            <div className="h-80 w-80 md:h-96 md:w-96 p-4  transform group  transition-transform duration-300">
              <div className="h-full w-full bg-richblack-5 bg-opacity-5 rounded-md font-semibold p-3 shadow-box">
                <h2 className="group-hover:text-tailwindblue-200 transition-transform duration-600 text-center text-lg">
                  Codeforces
                </h2>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}
const Tech=({item})=>{

  return(
    <div className=" flex w-max p-2 gap-1 rounded-md items-center text-sm bg-richblack-900 bg-opacity-30">
        <img src={item.link} alt=""  className="h-8 w-8"/>
        <p className="group-hover:text-tailwindblue-200 transition-transform duration-600">{item.name}</p>
    </div>
  )
}
export default Skills;
