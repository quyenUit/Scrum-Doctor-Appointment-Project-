import React from 'react'
import DoctorList from './DoctorList'
import { Link } from 'react-router-dom'
import Button from './Button'
import ProgressBar1 from './ProgressBar1'
import '../assets/css/ProgressBar.css'

const SetAppointment = () => {
  return (
    <div>
        <div  className="ProgressBar">
          <ProgressBar1 />
        </div>
        <DoctorList/>
    <div className="text-center my-6">
          <Link to="/InformationInput">
            {" "}
            {/* Specify the route you want to navigate to */}
            <Button className="" title="Next" />
          </Link>
        </div>
    </div>
  )
}

export default SetAppointment