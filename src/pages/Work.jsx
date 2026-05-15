import React from 'react'
import './Work.css'
import { useState } from 'react'

function Work() {

    const work = [
        {
            id: 1,
            name: "Acme Digital Studio",
            date: "2023 - 2024",
            role    : "Frontend Developer - UI/UX Designer"
        },
        {
            id: 2,
            name: "NYM Technologies",
            date: "2025 - 2027",
            role    : "Internship - Frontend Developer"
        },
        {
            id: 3,
            name: "Nova Cloud Systems",
            date: "2027 - 2029",
            role    : "Cloud UI Engineer"
        },
    ]




     const [data, setData] = useState({
    email: "",
    password: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
       <div className='heading'>
        <h1 style={{color: ' #f0ede8'}}>Let's <span style={{color:' #c8502a'}}>Talk</span></h1>
        <p style={{color: '#5a5652', marginTop: 12}}>Have a project, a role, or just a good problem to solve? I respond within 24 <br />
         hours and I'm always open to the right conversation.</p>
       </div>


       <div className='wxc'>
        <div className='left'>

        </div>
       </div>
    </div>
  )
}

export default Work