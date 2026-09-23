import React from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

function Preview({resume}) {

  return (
    <>
    <Link to={'/'} className='btn btn-outline mt-2 text-light' style={{backgroundColor:'violet'}}>Back</Link>
    <div className="w-100 py-4 px-1 border shadow my-2">
      <h4>{resume?.fullname}</h4>
      <p>Phone:{resume?.contact} <span></span></p>
      <p>Email:{resume?.email}<span></span></p>
      <p>LinkedIn: <a href="">{resume?.linkedin}</a></p>
      <p>Github Profile: <a href="">{resume?.github}</a></p>
      <p>Location: <span>{resume?.location}</span></p>
      <Divider/>
      <h4>Professional Summary</h4>
      <p style={{textAlign:'justify'}}>{resume?.summary}</p>
      <Divider/>
      <h4>Technical Skills</h4>
      <div>
         {
          resume?.skills &&
          <>
          {
            resume.skills.map(item=>(
              <button>{item}</button>
            ))
          }
          </>
         }
      </div>
      <Divider/>
      <h4>Education</h4>
      <p>Bachelor's Degree in: <span>{resume?.degree}</span></p>
      <p>University/college Name: <span>{resume?.college}</span></p>
      <p>Year of Graduation: <span>{resume?.graduation}</span></p>
    </div>
    </>
  )
}

export default Preview