import React from "react";
import Button from "./Button";
const DoctorCard = ({ imgURL, name, faculty, info, hospital }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden hover:shadow-md border-2 border-blue-50">
      <img src={imgURL} alt="Doc1" className="w-full" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base">{info}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hospital}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {faculty}
        </span>
      </div>
      <div  className='text-center m-4'><Button title="Select" /></div>
    </div>
  );
};

export default DoctorCard;
