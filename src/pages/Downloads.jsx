import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { deleteHistroyById, getAllHistoryApi } from '../services/allApiServices';

function Downloads() {

  const [history, setHistory] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const response = await getAllHistoryApi()
    console.log(response)
    if (response.status === 200) {
      setHistory(response?.data)
    }
  }

  const handleDelete=async(id)=>{
    const response=await deleteHistroyById(id)
    console.log(response)
    if(response.status==200){
      getHistory()
    }
  }

  return (
    <>
      <div style={{ minHeight: '60vh' }}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className="display-4">Download History</h5>
          <Link to={'/form'} className='text-decoration-none text-dark me-3'><FaArrowLeft />{' '}Back</Link>
        </div>
        <div className='my-3'>
          {
            history.length > 0 ?
              <div className='row container-fluid'>
                {
                  history.map(item => (
                    <div className='col-md-4'>
                      <div className='shadow p-3 rounded'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h4>Review at : {item?.datetime}</h4>
                          <button className='btn text-danger' onClick={()=>{handleDelete(item?.id)}}><FaTrash /></button>
                        </div>
                        <div className="rounded">
                          <img src={item?.picture}
                            alt="resume" height={'400px'} width={'100%'} />
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              :
              <h3 className="text-center text-danger">No History Available!!</h3>
          }

        </div>
      </div>
    </>
  )
}

export default Downloads