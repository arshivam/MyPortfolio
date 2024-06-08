import React from 'react'

function Projects() {
  return (
    <section className='projects bg-blue-50'>
         <div className="md:w-[80%] mx-auto flex flex-wrap gap-4 items-center p-4 md:p-24 min-h-[calc(100vh-70px)]">
          

          <div className=' w-[500px] h-[350px] rounded-xl bg-blue-900 text-white'>
            <div className="flex flex-col p-3">
            <div className=' '>
            <video
            className="w-full object-cover"
            autoPlay
            muted
            loop={true}
          >
            <source src="/netflixclone.mp4" type="video/mp4" />
          </video>
            </div>
            <div className=' py-3'>
               <h3 className='font-bold text-3xl'>Netflix homepage clone</h3> 
               <p>Tech used : html, css</p>
               <a  href="https://github.com/arshivam/NetFlix_Clone" className='hover:underline' target="_blank" rel="noopener noreferrer">Github link for Netflix clone</a>
            </div>
            </div>
             
          </div>

          <div className=' w-[500px] h-[350px] rounded-xl bg-blue-900 text-white'>
            <div className="flex flex-col p-3">
            <div className=''>
            <video
            className="w-full object-cover"
            autoPlay
            muted
            loop={true}
          >
            <source src="/twitterclone.mp4" type="video/mp4" />
          </video>
            </div>
            <div className=' py-3'>
               <h3 className='font-bold text-3xl'>Twitter clone</h3> 
               <p>Tech used : Html, javascript & Tailwind css </p>
               <a href="https://github.com/arshivam/Twitter-Clone-Tailwind" className='hover:underline' target="_blank" rel="noopener noreferrer">Github link for Twitter clone</a>
            </div>
            </div>
             
          </div>

          <div className=' w-[500px] h-[350px] rounded-xl bg-blue-900 text-white'>
            <div className="flex flex-col p-3">
            <div className=''>
            <img className='w-full object-cover' src="/spotifyclone.png" alt="" />
            </div>
            <div className=' py-3'>
               <h3 className='font-bold text-3xl'>Spotify clone</h3> 
               <p>Tech used : html, css & javascript</p>
               <a href="https://github.com/arshivam/Spotify-Clone" className='hover:underline' target="_blank" rel="noopener noreferrer">Github link for Spotify Clone</a>
            </div>
            </div>
             
          </div>
       
         
       
         </div>    </section>
  )
}

export default Projects