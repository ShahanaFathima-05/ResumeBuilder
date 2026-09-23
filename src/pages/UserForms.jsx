import React,{useState} from 'react'
import Inputform from '../components/Inputform'
import Preview from '../components/Preview'

function UserForms() {
    
  const [resume,setResume]=useState({})

  return (
    <div className="container-fluid" style={{minHeight:'80vh'}}>
      <div className="row">
        <div className="col-md-6 p-4">
          {/* state lifting */}
          <Inputform setResume={setResume}/>
        </div>
        <div className="col-md-6">
          {
            resume.fullname &&
            // {/* propsharing */}
            <Preview resume={resume}/>
          }
        </div>
      </div>
    </div>
  )
}

export default UserForms