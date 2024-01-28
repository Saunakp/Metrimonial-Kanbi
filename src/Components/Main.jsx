import React from 'react'
import Navbar from './Navbar'
import Login from './Login/Login'
import '../Components/Main.css'

const Main = () => {
  return (
    <div className='container-fluid'>
      <div className="banner-hero">
      <Navbar></Navbar>
        <div className="row">
          <div className="col-12">
            <h1 className='banner-text'>Trusted Matrimony & Matchmaking Service</h1>
          </div>
        </div>
      </div>
      
        
    </div>
  )
}   

export default Main
