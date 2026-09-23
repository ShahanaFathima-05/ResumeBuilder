import React, { useState, useCallback, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRoles from "../assets/it_job_roles.json";
import jobSkills from "../assets/jobskills.json";
import summary from "../assets/professional_summary.json"
import { addResumeApi } from '../services/allApiServices';
import { useNavigate } from 'react-router-dom';


const steps = [
  'Basic Information',
  'Contact Details',
  'Educational Details','Review & Submit'
];

function Inputform({setResume}) {
  const [activeStep, setActiveStep] = useState(0);
  // const [age, setAge] = React.useState('');
  const [resumeData, setResumeData] = useState({
  fullname: "",
  location: "",
  jobTitle: "",
  email: "",
  contact: "",
  linkedin: "",
  github: "",
  degree: "",
  college: "",
  graduation: "",
  skills:[],
  summary:"",
})


  const nav=useNavigate()

  const handleNext = () => {

    setActiveStep((prev) => prev + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  useEffect(() => {
    previousActiveStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
  setResume(resumeData)
}, [resumeData])

  const generate = () => {
  setResumeData({
    ...resumeData,
    skills: jobSkills[resumeData.jobTitle] || [],
    summary: summary[resumeData.jobTitle] || "",
  });

  handleNext();
}; 

const handleSubmit=async()=>{
  const{fullname,location,jobTitle,email,contact,linkedin,github,degree,college,graduation,skills,summary}=resumeData
  if(fullname && location && jobTitle && email && contact && linkedin && github && degree && college && graduation && skills && summary){
     const response=await addResumeApi(resumeData)
     if(response.status===201){
      alert("Resume Created")
      nav(`/views/${response?.data?.id}`)
     }
     else{
      alert("Resume Creation Failed!!")
     }
  }
  else{
    alert("Please fill up the form compeletly")
  }
}

  const renderStepContent=(stepCount)=>{
    switch (stepCount){
        case 0:return (
            <>
            <h3 className='fw-bold'>Personal Details</h3>
            <div className="p-3 row">
              <TextField fullWidth label="Full Name" variant="standard" value={resumeData.fullname} onChange={(e) => setResumeData({...resumeData, fullname: e.target.value, }) }/>
              <TextField fullWidth label="Location" variant="standard" value={resumeData.location} onChange={(e) => setResumeData({...resumeData, location: e.target.value, }) }/>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={resumeData.jobTitle}
          onChange={(e)=>{setResumeData({...resumeData,jobTitle:e.target.value,})}}
        >
          {
            jobRoles.jobRoles.map(item=>(
              <MenuItem value={item}>{item}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
            </div>
            </>
        )

         case 1:return (
            <>
            <h3 className='fw-bold'>Contact Details</h3>
            <div className="p-3 row">
              <TextField fullWidth label="Email" variant="standard" value={resumeData.email} onChange={(e) => setResumeData({...resumeData, email: e.target.value, }) }/>
              <TextField fullWidth label="Contact Number" variant="standard" value={resumeData.contact} onChange={(e) => setResumeData({...resumeData, contact: e.target.value, })}/>           
              <TextField fullWidth label="LinkedIn Link" variant="standard" value={resumeData.linkedin} onChange={(e) => setResumeData({...resumeData, linkedin: e.target.value, }) }/>          
              <TextField fullWidth label="GitHub Link" variant="standard" value={resumeData.github} onChange={(e) => setResumeData({...resumeData, github: e.target.value, })}/>        
    </div>
            </>
        )

         case 2:return (
            <>
            <h3 className='fw-bold'>Educational Details</h3>
            <div className="p-3 row">
              <TextField fullWidth label="Bachelor's Degree" variant="standard" value={resumeData.degree} onChange={(e) => setResumeData({...resumeData, degree: e.target.value, })}/>
              <TextField fullWidth label="University/College Name" variant="standard" value={resumeData.college} onChange={(e) => setResumeData({ ...resumeData, college: e.target.value,}) }/>              
              <TextField fullWidth label="Year Of Graduation" variant="standard" value={resumeData.graduation} onChange={(e) => setResumeData({...resumeData, graduation: e.target.value, })}/>
            </div>
            </>
        )

        case 3:return (
            <>
            <p>Our AI will generate Skills & Summary according to your job role. Click the <span style={{fontWeight:'bold'}}>Generate AI Skill & Summary</span> button to Proceed.</p>
            </>
        )
    }
  }

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - You're finished.
          </Typography>

          <Button onClick={handleSubmit} ref={resetButtonRef}>
            FINISH
          </Button>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
          </Typography>
          <Box>
            {renderStepContent(activeStep)}
          </Box>

          <Box sx={{ display: 'flex', pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />
            {
               activeStep === steps.length - 1 ? 
               <Button variant="contained" onClick={generate}>
               GENERATE SKILLS & SUMMARY
                </Button>
                :
                <Button variant="contained" onClick={handleNext}>
               Next
                </Button>             

            }

            
          </Box>
        </>
      )}
    </Box>
  );
}

export default Inputform