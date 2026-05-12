import React from 'react'
import './FAQs.css'

function FAQs() {
  return (
    <section className="section">

      <div className="left">
        <h1>Frequently Asked <span>
            Questions?
            </span> </h1>

        <p>
          Here are some of our FAQs. If you have any other questions,
          
          please feel free to contact us.
        </p>

        <button>Contact Us</button>
      </div>

      <div className="right">
       <div className='card1'>
        <h1>Question: Are there fully funded scholarships available</h1>
        <p>Answer: Yes, there are fully funded scholarships available for international students. 
        These scholarships typically cover tuition fees, living expenses, and sometimes even travel costs.
        Examples include the Fulbright Program, Chevening Scholarships, and Erasmus Mundus Scholarships.</p>
       </div>

       <div className='card2'>
        <h1>Question: What is the application deadline for these scholarships?</h1>
        <p>Answer: The application deadlines for scholarships vary by program and institution. It's important to check the specific requirements and deadlines for each scholarship you're interested in. Generally, applications open several months before the academic year begins.</p>
       </div>
       

       <div className='card3'>
        <h1>Question: How can I apply for these scholarships?</h1>
        <p>Answer: To apply for these scholarships, you typically need to submit an application form along with supporting documents such as academic transcripts, letters of recommendation, and a personal statement. Make sure to check the specific application requirements for each scholarship you're interested in. Thats is why we made the links of scholarships available for you.</p>
       </div>
 
    
      </div>
       
    </section>
  )
}

export default FAQs