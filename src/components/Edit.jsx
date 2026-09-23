import React, {useRef } from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider } from '@mui/material';
import jobRoles from '../assets/it_job_roles.json'
import { updateResumeApi } from '../services/allApiServices';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({ resume, setResumeData }) {
    const [open, setOpen] = React.useState(false);
    const inputRef=useRef()

    // console.log(setResumeData)

    const addSkills=()=>{
        const skill=inputRef.current.value
        console.log(skill)
        if(skill){
            if(resume?.skills?.map(item=>item.toLowerCase()).includes(skill.toLowerCase())){
                alert("Skill Already Added!!")
            }
            else{
                setResumeData({...resume,skills:[...resume.skills,skill]})
            }
        }
        else{
            alert("Enter Valid Input!!")
        }
    }

    const removeSkills = (skill) => {
        // console.log(skill)
        setResumeData({ ...resume, skills: resume?.skills?.filter(item => item != skill) })
    }

    const handleUpdate = async() => {
        console.log(resume)
        const response=await updateResumeApi(resume?.id,resume)
        console.log(response)
        if(response.status===200){
            alert("Resume Updated!!")
            handleClose()
        }
        else{
            alert("Updation Failed!!")
        }
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <button className='btn text-warning' onClick={handleOpen}><FaEdit style={{ fontSize: '35px' }} /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>
                    <div>
                        {/* Basic Informations */}
                        <h4>Personal Details</h4>
                        <div className='p-3 row'>
                            <TextField id="standard-basic" defaultValue={resume?.fullname} onChange={(e) => { setResumeData({ ...resume, fullname: e.target.value }) }} label="Full Name" variant="standard" />
                            <TextField id="standard-basic" defaultValue={resume?.location} onChange={(e) => { setResumeData({ ...resume, location: e.target.value }) }} label="Location" variant="standard" />
                            <FormControl variant="standard" sx={{ my: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    defaultValue={resume?.jobtitle}
                                    onChange={(e) => { setResumeData({ ...resume, jobtitle: e.target.value }) }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        jobRoles.jobRoles.map(item => (
                                            <MenuItem value={item}>{item}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        {/* Contact Details */}
                        <h4>Contact Details</h4>
                        <div className='p-3 row'>
                            <TextField id="standard-basic" defaultValue={resume?.email} onChange={(e) => { setResumeData({ ...resume, email: e.target.value }) }} label="Email" variant="standard" />
                            <TextField id="standard-basic" defaultValue={resume?.contact} onChange={(e) => { setResumeData({ ...resume, phone: e.target.value }) }} label="Contact Number" variant="standard" />
                            <TextField id="standard-basic" defaultValue={resume?.linkedin} onChange={(e) => { setResumeData({ ...resume, linkedin: e.target.value }) }} label="LinkedIn Link" variant="standard" />
                            <TextField id="standard-basic" defaultValue={resume?.github} onChange={(e) => { setResumeData({ ...resume, github: e.target.value }) }} label="Github Profile Link" variant="standard" />
                        </div>

                        {/* Education */}
                        <h4>Educational Details</h4>
                        <div className='p-3 row'>
                            <TextField id="standard-basic" defaultValue={resume?.degree} onChange={(e) => { setResumeData({ ...resume, degree: e.target.value }) }} label="Bachelor's Degree" variant="standard" />
                            <TextField id="standard-basic" defaultValue={resume?.college} onChange={(e) => { setResumeData({ ...resume, college: e.target.value }) }} label="University/College Name" variant="standard" />
                            <TextField id="standard-basic" defaultValue={resume?.graduation} onChange={(e) => { setResumeData({ ...resume, year: e.target.value }) }} label="Year of Graduation " variant="standard" />
                        </div>

                        {/* Technical Skills */}
                        <h4>Technical Skills</h4>
                        <div className='p-3'>
                            <h4>Add Skills</h4>
                            <div className='d-flex gap-2'>
                                <input ref={inputRef} type="text" placeholder='Enter Skill' className="form-control" />
                                <button className="btn btn-warning" onClick={addSkills}>+</button>
                            </div>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                            {
                                resume?.skills?.map(item => (
                                    <span className='px-2 py-1 border'>
                                        {item}
                                        <span className='text-danger fw-bolder' style={{ cursor: 'pointer' }} onClick={() => { removeSkills(item) }}>X</span>
                                    </span>
                                ))
                            }


                        </div>
                        {/* Summery */}
                        <h4>Summary</h4>
                        <div className='row p-3'>
                            <TextField id="standard-basic-degree" onChange={(e) => { setResumeData({ ...resume, summary: e.target.value }) }} defaultValue={resume?.summary} label="Summery " multiline width={'100%'} variant="standard" />
                        </div>

                        <div className="text-center mt-2">
                            <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Edit