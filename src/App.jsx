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
      {/* <nav
        className={`fixed  w-full top-0 z-50 flex justify-between px-10  transition-all duration-500 ease-in-out border-b border-0.2 border-richblack-700 bg-richblack-800 bg-opacity-30 backdrop-blur-xl `}
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
      </nav> */}

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

// App.jsx

// App.jsx
// App.jsx

// import React, { useState } from 'react';

// const CircularArea = ({ position }) => {
//   const radius = 300; // Adjust the radius of the circular area as needed

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         top: position.y - radius,
//         left: position.x - radius,
//         width: 2 * radius,
//         height: 2 * radius,
//         borderRadius: '50%',

//         background: 'radial-gradient(circle, rgba(4,151,218,0.06264501160092806) 45%, rgba(5,159,255,0) 57%, rgba(0,60,125,0.006039915966386533) 74%',

//         /*
// * Created with https://www.css-gradient.com
// * Gradient link: https://www.css-gradient.com/?c1=011843&c2=010118&gt=r&gd=dcc
// */

//       }}
//     />
//   );
// };

// const App = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <div
//       style={{
//         width: '100vw',
//         height: '100vh',
//         position: 'relative',
//         backgroundColor: 'rgba(4, 4, 20, 0.9)', // Darker background
//         display:'flex',
//         flexDirection:'column',
//         gap:'20px'
//       }}
//       onMouseMove={handleMouseMove}
//     >
//       <CircularArea position={mousePosition} />
//       <p style={{ color: 'white' }}>Your content goes here</p>
//       <div style={{ color: 'white', height:'500px',backgroundColor:'rgba(255, 255, 255, 0)'}}>Hello </div>
//       <div style={{ color: 'white', height:'500px',backgroundColor:'rgba(255, 255, 255, 0)'}}>Hello </div>
//     </div>
//   );
// };

// export default App;

// App.jsx

// import React from 'react';

// const App = () => {
//   return (
//     <div className="bg-gray-200 min-h-screen flex items-center justify-center">
//       <div className="xl:flex xl:h-full md:flex md:h-full sm:flex sm:h-full">
//         {/* Child 1 */}
//         <div className="xl:w-1/4 xl:h-full md:w-1/2 md:h-1/2 sm:w-full sm:h-1/4 bg-blue-300 p-4">
//           <p className="text-white">Child 1</p>
//         </div>

//         {/* Child 2 */}
//         <div className="xl:w-1/4 xl:h-full md:w-1/2 md:h-1/2 sm:w-full sm:h-1/4 bg-green-300 p-4">
//           <p className="text-white">Child 2</p>
//         </div>

//         {/* Child 3 */}
//         <div className="xl:w-1/4 xl:h-full md:w-1/2 md:h-1/2 sm:w-full sm:h-1/4 bg-red-300 p-4">
//           <p className="text-white">Child 3</p>
//         </div>

//         {/* Child 4 */}
//         <div className="xl:w-1/4 xl:h-full md:w-1/2 md:h-1/2 sm:w-full sm:h-1/4 bg-yellow-300 p-4">
//           <p className="text-white">Child 4</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// app.jsx

// app.jsx

// app.jsx

// import React from 'react';

// app.jsx

// const App = () => {
//   return (
//     <div className="flex flex-wrap h-screen">
//       {/* For Large Screens (lg): 2 rows, 2 columns */}
//       <div className="w-full h-1/4 md:w-1/2 md:h-1/2 xl:w-1/4 xl:h-full sm:w-full p-4">
//         <div className="h-full w-full bg-blue-500 ">Child 1</div>
//       </div>
//       <div className="w-full h-1/4 md:w-1/2 md:h-1/2 xl:w-1/4 xl:h-full sm:w-full p-4">
//         <div className="h-full w-full bg-blue-500 ">Child 1</div>
//       </div>
//       <div className="w-full h-1/4 md:w-1/2 md:h-1/2 xl:w-1/4 xl:h-full sm:w-full p-4">
//         <div className="h-full w-full bg-blue-500 ">Child 1</div>
//       </div>
//       <div className="w-full h-1/4 md:w-1/2 md:h-1/2 xl:w-1/4 xl:h-full sm:w-full p-4">
//         <div className="h-full w-full bg-blue-500 ">Child 1</div>
//       </div>

//     </div>
//   );
// };

// export default App;
