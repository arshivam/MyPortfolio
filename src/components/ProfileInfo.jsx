import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Skill from "./Skill";
import Experience from "./Experience";

function ProfileInfo() {
  return (
    <>
      <section className="profile-info  bg-blue-50 font-mono">
        <div className="md:w-[80%] mx-auto flex flex-col  items-center p-4 md:p-24 min-h-[calc(100vh-70px)]">
          <img width={200} className="m-4" src="/avatar.png" alt="" />
          <p className="font-bold text-2xl">Hi👋, I'm a</p>
          <div className="h-[100px] flex justify-center items-center">
            <h2 className="font-bold text-2xl md:text-5xl text-blue-900 m-2">
              <span style={{ fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Software Developer", "Front-End Developer"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  cursorBlinking={true}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>

          <p className="m-4 md:m-6 pb-16 md:pb-0 text-xl">
            I'm <span className="font-bold text-blue-900">Shivam Armarkar</span>{" "}
            Full stack software developer with expertise in front-end <br />
            and back-end development, experienced in leading cross-functional
            teams
          </p>
          <div className="flex gap-6">
            <a href="mailto:shivam.armarkar007@gmail.com">
              <button
                className="bg-orange-600 hover:bg-orange-400 px-10 py-2 text-white border border-t-0 border-r-4 border-b-4 border-l-0 border-black"
                type="button"
              >
                Hire me
              </button>
            </a>
            <a href="/Shivam_Armarkar_Resume_new2.pdf" download>
              <button
                className="bg-blue-900 hover:bg-blue-400 px-6 py-2 text-white border border-t-0 border-r-4 border-b-4 border-l-0 border-black"
                type="button"
              >
                Download CV{" "}
              </button>
            </a>
          </div>

          <div></div>
        </div>
      </section>
      <Skill />
      <Experience />
    </>
  );
}

export default ProfileInfo;
