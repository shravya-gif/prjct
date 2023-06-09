import React from 'react'
import './sidebar.css'
import Container from 'react-bootstrap/esm/Container'

function Sidebar() {
  return (
    
    <div className='bg-white sidebar p-3'>
        <Container className='fluid ms-auto'>
      <div className='m-2'>
        <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
        <img alt='prob'></img>
        <span className='brand-name fs-4'>Investor Onboarding</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        <a href className='list-group-item py-3'>
            <i className='bi bi-speedometer2 fs-5 me-2'></i>
            <span>Dashboard</span>
        </a>
        <a href className='list-group-item py-3'>
            <i className='bi bi-house fs-5 me-2'></i>
            <span>Home</span>
        </a>
        <a href className='list-group-item py-3'>
            <i className='bi bi-table fs-5 me-2'></i>
            <span>Investment</span>
        </a>
        <a href className='list-group-item py-3'>
            <i className='bi bi-clipboard-data fs-5 me-2'></i>
            <span>Report</span>
        </a>
        <a href className='list-group-item py-3'>
            <i className='bi bi-users fs-5 me-2'></i>
            <span>Customer</span>
        </a>
        <a href className='list-group-item py-3'>
            <i className='bi bi-power fs-5 me-2'></i>
            <span >Logout</span>
        </a>

      </div>
      <div>
        
      </div>
      
    </Container>
    </div>
  )
}

export default Sidebar
