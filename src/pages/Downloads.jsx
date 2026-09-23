import React from 'react'
import { Link } from 'react-router-dom'
import resumeImage from '../assets/resumeeg.png'
import { IoMdBackspace } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

function Downloads() {
  return (
    <>
    <div style={{minHeight:'60vh'}}>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className='m-3'>Download History</h2>
        <Link to={'/forms'} className="text-decoration-none text-dark me-3"><IoMdBackspace/> Back</Link>
      </div>
      <div className="my-3">
        <div className="row container-fluid">
          <div className="col-md-4">
            <div className="shadow p-3 rounded">
             <div className="d-flex justify-content-between align-items-center">
              <h4>Review at : time</h4>
              <button className="btn text-danger"><FaTrash/></button>
             </div>
             <div className="rounded">
              <img src={resumeImage} alt=""  height={'400px'} width={'400px'}/>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Downloads