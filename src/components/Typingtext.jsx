import React from 'react'
import { ReactTyped } from 'react-typed';

const Typingtext = () => {
  return (
    <h2 className="text-3xl font-bold text-primary">
      <span className='text-white'>I'm </span>  
      <ReactTyped
        strings={[
          "a Passionate Web Developer",
          "a Frontend Developer",
          "a JavaScript Enthusiast",
          "Always Learning New Technologies",
        ]}
        typeSpeed={80}
        backSpeed={50}
        loop
      />
    </h2>
  )
}

export default Typingtext
