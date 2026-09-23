import React from 'react'
import { Link } from 'react-router-dom'

function ResumeSteps() {
  return (
    <div className="container-fluid" style={{ minHeight: '100vh' }}>
      <h1 className="text-center my-5">
        Create a Job-Winning Resume in Minutes
      </h1>

      <div className="row justify-content-center g-4 my-4">
        <div className="col-md-4">
          <div className="border border-2 shadow bg-light p-4 rounded text-center h-100">
            <h2>Add Your Information</h2>
            <p>Add pre-written examples to each section.</p>
            <h4 className="text-primary">Step 1</h4>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border border-2 shadow bg-light p-4 rounded text-center h-100">
            <h2>Download Your Resume</h2>
            <p>Download your resume and start applying.</p>
            <h4 className="text-success">Step 2</h4>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link
          to="/forms"
          className="btn btn-lg text-white"
          style={{ backgroundColor: "violet" }}
        >
          Let's Start
        </Link>
      </div>
    </div>
  )
}

export default ResumeSteps