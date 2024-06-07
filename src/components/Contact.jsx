import React from 'react'

function Contact() {
  return (
    <section className=' bg-blue-50'>
        <div className=" min-h-[calc(100vh-70px)] flex ">
          <div className="relative video">
            <p className='absolute bottom-0 text-white font-sans italic -rotate-12 m-8'>"Seeking a skilled craftsman to transform your stunning UI designs
          into a seamlessly functioning reality? Let's bring your vision to life
          with precision and creativity!"</p>
          <video width={481} autoPlay muted loop={true} >
          <source src="/skillingup.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="contact-me flex flex-col gap-6 justify-center items-center px-24">
            <h2 className='font-bold font-mono text-4xl'>Connect with me</h2>
            <a href="mailto:shivam.armarkar007@gmail.com">
        <button className="bg-black px-10 py-2 text-white rounded-full font-bold" type="button">Mail to shivam.armarkar007@gmail.com</button>
        </a>
        <p>By providing your email, you agree to receive occasional emails from me. These emails may include important updates about my latest projects, insightful blog posts, and relevant replies.</p>
        <p>Your privacy is important to me, and I assure you that I will not share your email address with third parties without your explicit consent.</p>
        <p>Thank you!</p>
          </div>
          
        </div>
    </section>
    
  )
}

export default Contact