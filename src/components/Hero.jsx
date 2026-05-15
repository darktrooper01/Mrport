import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div>
      <section>
        <div className='left2'>
          <h1>Design. <br />Build. <br /><span>Ship.</span></h1>
        </div>

        

        <div className='right2'>
          <p>I'm Mahmoud — a frontend developer and UI/UX designer who also works in cloud infrastructure. I care about the full picture: from how something looks to how it runs in production.</p>
          <button className='btn1' >View Work</button>
          <button className='btn2'>Get In Touch</button>
        </div>
      </section>
    </div>
  )
}

export default Hero