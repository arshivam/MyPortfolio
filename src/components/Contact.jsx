import React from "react";

function Contact() {
  return (
    <section className=" bg-blue-50">
      <div className=" flex flex-col  md:flex-row md:min-h-[calc(100vh-62px)] ">
        <div className="relative video min-h-80 md:w-[30%]">
          <p className="md:absolute bottom-2 z-10 text-white font-sans italic -rotate-12 m-8">
            "Seeking a skilled craftsman to transform your stunning UI designs
            into a seamlessly functioning reality? Let's bring your vision to
            life with precision and creativity!"
          </p>
          <video
            className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
            autoPlay
            muted
            loop={true}
          >
            <source src="/skillingup.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="contact-me flex flex-col gap-6 justify-center items-center py-[40px]  md:px-24 md:w-[70%]">
          <h2 className="font-bold font-mono text-4xl">Connect with me</h2>
          <a
            className="flex bg-black px-3 md:px-4 py-2 text-white rounded-full font-bold"
            type="button"
            href="mailto:shivam.armarkar007@gmail.com"
          >
            <img className="mx-2" width={20} src="/gmail.png" alt="gmail" />
            mail to shivam.armarkar007@gmail.com
          </a>
          <p className="font-xl italic px-14 md:px-24">
            By providing your email, you agree to receive occasional emails from
            me. These emails may include important updates about my latest
            projects, insightful blog posts, and relevant replies.
          </p>
          <p className="font-xl italic px-14 md:px-24">
            Your privacy is important to me, and I assure you that I will not
            share your email address with third parties without your explicit
            consent.
          </p>
          <p className="font-xl italic px-14 md:px-24">Thank you!</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
