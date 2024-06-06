import React from "react";

function Experience() {
  return (
    <section className="experience  bg-blue-50 p-10">
      <div className="w-[80%] min-h-screen mx-auto">
        <div className="text-center text-blue-900 font-bold font-mono text-xl py-4">
          EXPERIENCE
        </div>
        <div className="bg-blue-100 rounded-lg work-info p-8 m-4">
          <div className="flex justify-between">
            <h2 className="font-bold">Tata Consultancy Services,Nagpur</h2>
            <div className="text-blue-700 text-sm">April 2023 - Present</div>
          </div>
          <div className="flex item-center gap-1 py-1">
            <strong className="py-[4px]">Software Developer</strong>
            <label className="bg-red-200 rounded-[20px] px-[12px] py-[4px]">
              Current Role
            </label>
          </div>

          <div className="py-2">
            <h3 className="font-bold text-sm">Job Description :</h3>
            Developed different frontend components and portals, helped team
            members regarding frontend queries, fixed bugs and added new
            features. Learned new skills as per project requirement and worked
            under minimal guidelines. Performed impact analysis while upgrading
            or adding new functionalities. Boosted customer satisfaction rates through timely resolution of reported technical issues during support phase of projects.
          </div>
          <div className="py-2">
            <h3 className="font-bold text-sm">Skills :</h3>
            <p>
              Optimising · Debugging · Code Review · Performance Tuning ·
              Interactive Web · Front-End Development · Git · Redux · jQuery ·
              Tailwind CSS · Cascading Style Sheets (CSS) · JavaScript ·
              React.js · React Native · Bootstrap · HTML5
            </p>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg work-info p-8 m-4">
          <div className="flex justify-between">
            <h2 className="font-bold">Tata Consultancy Services,Nagpur</h2>
            <div className="text-blue-700 text-sm">March 2022 - March 2023</div>
          </div>
          <div className="flex item-center gap-1 py-1">
            <strong className="py-[4px]">Jr. Software Developer</strong>
          </div>

          <div className="py-2">
            <h3 className="font-bold text-sm">Job Description :</h3>
            Developed different frontend re-useable components and portals,
            helped team members regarding frontend queries, fixed bugs and added
            new features. Learned new skills as per project requirement and
            worked under minimal guidelines.
          </div>
          <div className="py-2">
            <h3 className="font-bold text-sm">Skills :</h3>
            <p>
              Optimising · Debugging · Interactive Web · Front-End Development ·
              Git · jQuery · Cascading Style Sheets (CSS) · JavaScript ·
              React.js · Bootstrap · HTML5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
