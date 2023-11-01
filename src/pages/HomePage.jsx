import React from 'react'

import SymptomsInput from '../components/SymptomsInput'
import '../assets/css/HomePage.css'

const HomePage = () => {
  return (
    <div>
       <h1 className='title_appointment'>Doctor Appointment System</h1>
       
        <SymptomsInput currentPage="SymptomsInput" />
    </div>
  )
}

export default HomePage