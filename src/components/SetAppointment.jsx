import React, { useState } from 'react'
import DoctorList from './DoctorList'
import { Link } from 'react-router-dom'
import Button from './Button'
import ProgressBar1 from './ProgressBar1'
import '../assets/css/ProgressBar.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Combobox from "react-widgets/Combobox";

const departName = 'None'

const SetAppointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState();

  const handleDateChange = (date) => {
    setStartDate(date);
    // const day = String(date.getDate()).padStart(2, '0');
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    // const year = date.getFullYear();
    // const dateString = `${day}/${month}/${year}`;
    // console.log(dateString);
    console.log(date)
  };
  const handleTimeChange = (time) => {
    setSelectedTime(time.target.value);
  };

  return (
    <div>
        <div  className="ProgressBar">
          <ProgressBar1 />
        </div>
        <div>
            {departName}
        </div>
        <div>
            <DatePicker selected={startDate} onChange={handleDateChange} />
            <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            value={selectedTime}
            onChange={handleTimeChange}>
                <option value={"7:00"}>7:00</option>
                <option value={"8:00"}>8:00</option>
                <option value={"9:00"}>9:00</option>
                <option value={"10:00"}>10:00</option>
                <option value={"11:00"}>11:00</option>
                <option value={"13:00"}>13:00</option>
                <option value={"14:00"}>14:00</option>
                <option value={"15:00"}>15:00</option>
          </select>
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