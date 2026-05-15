import React from 'react'
import './Projcard.css'
import { useNavigate } from "react-router-dom";


function Projcard() { 
  const navigate = useNavigate();

  return (
    <div>
        <div className='projname'>
            <span style={{color: '#c8502a', letterSpacing: '0px'}}> 02   </span>
            SELECTED WORK
        </div>
          <div className='projcard'>
   <div className='card10'>
        <p>
            <span style={{fontSize: 12, color: '#5a5652'}}> 01-2024 <br /> <br /></span>
           
            <span style={{color: '#c8502a', fontSize: 13}}> UI/UX - FULL STACK <br /> <br /></span>
           
            SCHOLARFIND <br /> <br />
            <span style={{color: '#5a5652'}}>A platform that connects students with scholarships, providing a comprehensive database of opportunities and resources to help them achieve their educational goals.</span>
        </p>
    </div>
         <div className='card10'>
        <p>
            <span style={{fontSize: 12, color: '#5a5652'}}> 01-2025 <br /> <br /></span>
            <span style={{color: '#c8502a', fontSize: 13}}>UI/UX - FRONTEND <br /> <br /></span>
            
            Tempo Design System <br /> <br />
           <span style={{color: '#5a5652'}}>A comprehensive design system for creating consistent and scalable user interfaces.</span>
        </p>
    </div>
         <div className='card11'>
        <p>
            <span style={{fontSize: 12, color: '#5a5652'}}> 05-2025 <br /> <br /></span>  
            <span style={{color: '#c8502a', fontSize: 13}}>UI/UX - FRONTEND <br /> <br /></span>
            
            Cloud Infra Tool <br /> <br />
           <span style={{color: '#5a5652'}}>A comprehensive tool for managing cloud infrastructure resources.</span>
        </p>

        
    </div>
        

     </div>
    
     <button onClick={() => navigate("/Work")} className='btncard'>SEE ALL PROJECTS</button>
   
    

     
      
    </div>



    
   
      
    
   
  )
}

export default Projcard