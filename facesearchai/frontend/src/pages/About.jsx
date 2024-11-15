import React from 'react'
import './About.css'
import about_img from '../assets/about.png.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
    
      </div>
      <div className="about-right">
        <h2>ABOUT</h2>
          <h3>FaceSearchAI</h3>
        <p>Face Search AI is your new secret weapon for exploring the web through photos! Developed by DIA and Persist Ventures, this AI-powered tool helps you uncover the online presence of people with just a single image. Ever wonder where a photo of someone might show up online? Face Search AI does the hard work for you, searching across the web for websites and links that may feature images similar to the one you upload. It's like a detective for your photos—simpler and faster than traditional search engines!
           Getting started is super easy. Just upload a clear photo in popular formats like JPEG, JPG, or PNG. Face Search AI scans the image, analyzes facial features, and looks for matching visuals across the web. For the best results, try to use a well-lit, sharp image that clearly shows the face. Once the AI works its magic, you'll get a list of links to explore, where similar images might appear. Whether you're digging up old social connections, researching someone, or just curious about where a photo might live online, 
           Face Search AI opens up a whole new world of discovery!</p>
      </div>
    </div>
  )
}

export default About
