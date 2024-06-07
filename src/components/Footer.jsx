
import React from "react";

function Footer() {
  return (
    <section className="footer bg-blue-50">
      <div className="relative overflow-hidden">
        <img className="md:w-full" src="/wave.svg" alt=""  />
        <div className="absolute top-10 md:top-1/2 left-4 md:left-[239px] flex flex-col md:gap-4">
          <div className="hidden md:block text-white hover:underline hover:cursor-pointer">
            My Social media links :
          </div>
          <div className="flex gap-4 md:gap-6">
            <a href="https://www.linkedin.com/in/shivam-armarkar-9b957b192/" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer"
                src="linkedin-svgrepo-com%201.svg"
                alt=""
                
              />
            </a>
            <a href="https://x.com/ShivamArmarkar" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer"
                src="twitter-svgrepo-com%201.svg"
                alt=""
                
              />
            </a>
            <a href="mailto:shivam.armarkar007@gmail.com" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer"
                src="gmail-svgrepo-com%201.svg"
                alt=""
                
              />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer"
                src="whatsapp-svgrepo-com%201.svg"
                alt=""
                
              />
            </a>
          </div>
        </div>
        <div className="absolute md:top-1/2 md:right-[239px] top-10 right-0 flex flex-col gap-2 pr-2">
          <div className="hidden md:block text-white hover:underline hover:cursor-pointer">
            More projects I've worked on :
          </div>
          <div className="flex gap-1 items-center">
            <img
              className="hover:cursor-pointer"
              src="/github.png"
              alt=""
              
            />
            <a
              className="text-white hover:underline"
              href="https://github.com/arshivam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-green-300">@arshivam</span> on github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
