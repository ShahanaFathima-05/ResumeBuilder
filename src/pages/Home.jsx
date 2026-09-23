import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/resumebg.png'
import resumeImage from '../assets/resumeeg.png'
import nextbg from '../assets/nextbg.png'


function Home() {

  const herostyle={
    minHeight:"90vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    backgroundPosition:'center'
  }


  const nextbgstyle={
    minHeight:"90vh",
    backgroundImage: `url(${nextbg})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    backgroundPosition:'center'
  }

  return (
    <>
    <div className="container-fluid">
      {/* hero */}
      <div style={herostyle} className='d-flex justify-content-center align-items-center'> 
        <div className="w-50 border border-2 border-dark text-center p-3">
           <h3>Buid Your Resume</h3>
           <h4>Your Skills , Your Story , Your Next Job All In One</h4>
           <Link to={'/steps'} className='btn text-light' style={{backgroundColor:'violet'}}> Make your resume now</Link>
        </div>
      </div>
    </div>

    {/* Tools */}
 <section className="container py-5">
  <h2 className="text-center fw-bold mb-5">Tools</h2>
  <div className="row align-items-center">

    <div className="col-lg-6">
      <div className="mb-5">
        <h2 >Resume</h2>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsum id beatae possimus non eveniet recusandae reiciendis laboriosam. Autem libero possimus repellat dolores eos rerum corporis aperiam aliquid neque officiis.</p>
      </div>

      <div className="mb-5">
        <h2>Cover Letter</h2>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum ipsa! Et, excepturi suscipit? Distinctio veniam, et quod nostrum commodi architecto non quas aut optio officiis voluptas molestiae, saepe accusantium?</p>
      </div>

      <div className="mb-5">
        <h2>Jobs</h2>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit deleniti minus praesentium facilis illum doloribus perspiciatis iste, sequi autem, reprehenderit explicabo dolores officia nam quod non. Nihil, pariatur porro.</p>
      </div>

      <div className="mb-5">
        <h2>Application</h2>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit deleniti minus praesentium facilis illum doloribus perspiciatis iste, sequi autem, reprehenderit explicabo dolores officia nam quod non. Nihil, pariatur porro.</p>
      </div>

    </div>

    
    <div className="col-lg-6 text-center">
      <img src={resumeImage} alt="" className="img-fluid" style={{ maxWidth: "430px", width: "100%"}}/>
    </div>

  </div>
 </section>


    <div className="container-fluid">
      <div style={nextbgstyle}>

      </div>
    </div>

   {/* Testimony */}
   <section className="container py-5">
  <h2 className="text-center fw-bold mb-5">Testimony</h2>

  <div className="row align-items-center">

    {/* Left Side */}
    <div className="col-lg-6">
      <div style={{ textAlign: "justify" }}>
        <h3>Trusted By Professionals Worldwide</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sint
          sunt explicabo voluptatem. Commodi magnam nisi sint adipisci nesciunt
          laboriosam illum facere exercitationem impedit deleniti.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sint
          sunt explicabo voluptatem. Commodi magnam nisi sint adipisci nesciunt
          laboriosam illum facere exercitationem impedit deleniti.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sint
          sunt explicabo voluptatem. Commodi magnam nisi sint adipisci nesciunt
          laboriosam illum facere exercitationem impedit deleniti.
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="col-lg-6 text-center">
      <img
        src='https://static.vecteezy.com/system/resources/thumbnails/042/054/707/small/ai-generated-people-character-team-group-office-png.png'
        alt="Resume"
        className="img-fluid rounded shadow"
        style={{ maxWidth: "430px", width: "100%" }}
      />
    </div>

  </div>
</section>
    </>



  )
}

export default Home