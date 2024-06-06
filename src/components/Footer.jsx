import React from "react";

function Footer() {
  return (
    <section className="footer bg-blue-50">
      <div className="relative">
        <img className="w-full" src="/wave.svg" alt="" srcset="" />
        <div className="absolute top-1/2 left-[239px] flex flex-col gap-4">
          <div className="text-white hover:underline hover:cursor-pointer">
            My Social media links :
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/shivam-armarkar-9b957b192/" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer"
                src="linkedin-svgrepo-com%201.svg"
                alt=""
                srcset=""
              />
            </a>
            <a href="https://x.com/ShivamArmarkar" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer"
                src="twitter-svgrepo-com%201.svg"
                alt=""
                srcset=""
              />
            </a>
            <a href="mailto:shivam.armarkar007@gmail.com" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer"
                src="gmail-svgrepo-com%201.svg"
                alt=""
                srcset=""
              />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer"
                src="whatsapp-svgrepo-com%201.svg"
                alt=""
                srcset=""
              />
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 right-[239px] flex flex-col gap-2">
          <div className="text-white hover:underline hover:cursor-pointer">
            More projects I've worked on :
          </div>
          <div className="flex gap-1 items-center">
            <img
              className="hover:cursor-pointer"
              src="/github.png"
              alt=""
              srcset=""
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
