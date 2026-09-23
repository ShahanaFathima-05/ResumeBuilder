import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

function Pnf() {
  return (
    <>
    <div style={{minHeight:'80vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <h2 className="text-center fw-bold">Page Not Found !!</h2>
      <img src="https://assets-v2.lottiefiles.com/a/0295c0a4-3532-11ef-9f29-13073c8721a8/xgrJ1gZOP5.gif" alt="" />
      <Link className="text-decoration-none text-dark fw-bold" to={'/'} style={{fontSize:'30px'}}> Back to Home</Link>
    </div>
    </>
  )
}

export default Pnf