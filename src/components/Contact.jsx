import React from 'react'

function Contact() {
  return (
    <section className=' bg-blue-50'>
        <div className=" min-h-[calc(100vh-70px)] flex ">
          <div className="video">
          <video width={481} autoPlay muted loop={true} >
          <source src="/skillingup.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="contact-me flex flex-col gap-6 justify-center items-center px-24">
            <h2 className='font-bold font-mono text-4xl'>Connect with me</h2>
            <a href="mailto:shivam.armarkar007@gmail.com">
        <button className="bg-orange-600 hover:bg-orange-400 px-10 py-2 text-white border border-t-0 border-r-4 border-b-4 border-l-0 border-black" type="button">Mail to shivam.armarkar007@gmail.com</button>
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