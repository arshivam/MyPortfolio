import React from 'react'

function Contact() {
  return (
    <section className=' bg-blue-50'>
        <div className=" flex  min-h-[calc(100vh-62px)] ">
          <div className="relative video w-[30%] bg-red-500">
            <p className='absolute bottom-2 z-10 text-white font-sans italic -rotate-12 m-8'>"Seeking a skilled craftsman to transform your stunning UI designs
          into a seamlessly functioning reality? Let's bring your vision to life
          with precision and creativity!"</p>
          <video className='absolute top-0 left-0 w-[100%] h-[100%] object-cover' autoPlay muted loop={true} >
          <source src="/skillingup.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="contact-me flex flex-col gap-6 justify-center items-center px-24 w-[70%]">
            <h2 className='font-bold font-mono text-4xl'>Connect with me</h2>
            <a href="mailto:shivam.armarkar007@gmail.com">
        <button className="bg-black px-10 py-2 text-white rounded-full font-bold" type="button">Mail to shivam.armarkar007@gmail.com</button>
        </a>
        <p className='font-xl italic px-24'>By providing your email, you agree to receive occasional emails from me. These emails may include important updates about my latest projects, insightful blog posts, and relevant replies.</p>
        <p className='font-xl italic px-24'>Your privacy is important to me, and I assure you that I will not share your email address with third parties without your explicit consent.</p>
        <p className='font-xl italic px-24'>Thank you!</p>
          </div>
          
        </div>
    </section>
    
  )
}

export default Contact