import React from "react";
import { Typewriter } from 'react-simple-typewriter'

function ProfileInfo() {
  
  return (
    <section className="profile-info  bg-blue-50 font-mono">
      <div className="w-[80%] mx-auto flex flex-col  items-center p-24 min-h-[calc(100vh-70px)]">
        <img width={200} className="m-4" src="/avatar.png" alt=""/>
        <p className="font-bold text-2xl">Hi👋, I'm a</p>
        <h2 className="font-bold text-5xl text-blue-900 m-2"><span style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Software Developer', 'Front-End Developer']}
            loop={false}
            cursor
            cursorStyle='|'
            cursorBlinking={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h2>
        <p className="m-6 text-xl">
          I'm <span className="font-bold text-blue-900">Shivam Armarkar</span> Full stack software developer with
          expertise in front-end <br/>and back-end development, experienced in leading
          cross-functional teams
        </p>
        <button className="bg-orange-600 px-6 py-2 text-white border border-t-0 border-r-4 border-b-4 border-l-0 border-black" type="button">Hire me</button>
      </div>
    </section>
  );
}

export default ProfileInfo;
