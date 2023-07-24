// import React from 'react';
// import { FaUserTimes, FaUserPlus } from "react-icons/fa";
// import { BsFillCalendarEventFill } from "react-icons/bs";
// import { Link } from 'react-router-dom';
// const CollegeCard = ({ college }) => {
//   const {_id, name, image, admissionDates, events, researchHistory, sports } = college;

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <img className="w-full h-40 object-cover mb-4 rounded-t-lg" src={image} alt={name} />
//       <h2 className="text-2xl font-bold text-center text-blue-800">{name}</h2>
//       <div className="m-5 p-5 bg-blue-100">
//         <p className="  flex items-center gap-2"> <FaUserPlus></FaUserPlus> <span> Admission open: {admissionDates}</span></p>
//         <p className="  flex items-center gap-2"> <FaUserTimes></FaUserTimes> <span> Admission Close: {admissionDates}</span></p>
        
  
//       </div>
//       <div className="mb-2">
//         <p className="font-semibold flex items-center gap-4"> <BsFillCalendarEventFill></BsFillCalendarEventFill> <span>Upcoming Events:</span></p>
//         <ul>
//           {events.map((event, index) => (
//             <li className='border-l-4 border-blue-800 bg-slate-200 my-2 p-2' key={index}>{event}</li>
//           ))}
//         </ul>
//       </div>
//       <p className="font-semibold">Research History:</p>
//       <p>{researchHistory}</p>
//       <div className="mt-2">
//         <p className="font-semibold">Sports:</p>
//         <div className='flex items-center justify-between mt-4'>
//           {sports.map((sport, index) => (
            
//                 <button className='badge badge-outline' key={index}>{sport}</button>
            

           
//           ))}
//         </div>
//       </div>
//       <div className='flex justify-center items-center mt-5'>
//       <Link to={`/colleges/${_id}`}>
//         <button className="btn bg-blue-800 text-white hover:bg-blue-700 transition duration-300  hover:text-white">
//           View Details
//         </button>
//       </Link>
//       </div>
//     </div>
//   );
// };

// export default CollegeCard;



import { BsFillCalendarEventFill } from "react-icons/bs";
import {  FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
  const { _id, name, image, admissionDate, events, research_number, research_works, sports_categories } = college;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      
        <img className="w-full h-40 object-cover mb-4 rounded-t-lg" src={image} alt={name} />
    
      <h2 className="text-2xl font-bold text-center text-blue-800">{name}</h2>
      <div className="m-5 p-5 bg-blue-100">
       <p className="  flex items-center gap-2"> <FaUserPlus></FaUserPlus> <span> Admission open: {admissionDate}</span></p>
       </div>
      <div className="mb-2">
        <p className="font-semibold flex items-center gap-4"> <BsFillCalendarEventFill></BsFillCalendarEventFill> <span>Upcoming Events:</span></p>
        <ul>
          {events && events.map((event, index) => (
            <li className='border-l-4 border-blue-800 bg-slate-200 my-2 p-2' key={index}>{event.name}</li>
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <p className="font-semibold">Research Works: {research_number}</p>
        
      </div>
      <div className="mb-2">
        <p className="font-semibold">Sports Categories:</p>
        
          {sports_categories && sports_categories.map((sport, index) => (
            <button className='badge badge-outline' key={index}>{sport.name}</button>
          ))}
        
      </div>
      <div className='flex items-center justify-between mt-4'>
   
   </div>
      <div className='flex justify-center items-center mt-5'>
        <Link to={`/colleges/${_id}`}>
          <button className="btn bg-blue-800 text-white hover:bg-blue-700 transition duration-300 hover:text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
