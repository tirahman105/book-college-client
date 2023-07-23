// // import React from 'react';

// // const MyAdmissionCard = ({admission}) => {
// //     return (
// //         <div>
// //             {admission.CollegeName}
// //             {admission.CandidateName}
// //         </div>
// //     );
// // };

// // export default MyAdmissionCard;

// import React, { useEffect, useState } from 'react';

// const MyAdmissionCard = ({ admission }) => {
//   const [collegeDetails, setCollegeDetails] = useState(null);

//   useEffect(() => {
//     const fetchCollegeDetails = async () => {
//       try {
//         // Fetch college details based on the college name from collegeCollection
//         const response = await fetch(`http://localhost:5000/colleges/details/${admission.name}`);
//         const data = await response.json();
//         setCollegeDetails(data);
//       } catch (error) {
//         console.error('Error fetching college details:', error);
//       }
//     };
  
//     fetchCollegeDetails();
//   }, [admission.name]);

//   if (!collegeDetails) {
//     return <div>Loading...</div>;
//   }

//   const { _id, name, image, admissionDate, events, research_works, sports_categories } = collegeDetails;


//   // Render the My Admission card with college details
//   return (
//     <div>
//       <h3>{admission.name}</h3>
//       {/* Render other college details from collegeDetails */}
//       <p>Location: {admissionDate}</p>
//       {/* <p>About: {collegeDetails.about}</p> */}
//       {/* Add more college details as needed */}
//     </div>
//   );
// };

// export default MyAdmissionCard;


import React, { useEffect, useState } from 'react';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyAdmissionCard = ({ admission }) => {
  const [collegeDetails, setCollegeDetails] = useState(null);

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        // Fetch college details based on the college name from collegeCollection
        const response = await fetch(`http://localhost:5000/colleges/details/name/${admission.name}`);
        const data = await response.json();
        console.log('College Details:', data); 
        setCollegeDetails(data);
      } catch (error) {
        console.error('Error fetching college details:', error);
      }
    };

    fetchCollegeDetails();
  }, [admission.name]);

  if (!collegeDetails) {
    return <div>Loading...</div>;
  }

  const { _id, name, image, admissionDate, events, research_works, sports_categories } = collegeDetails;

  // Render the My Admission card with college details
  return (
    <div>
      <h3>{admission.name}</h3>
      {/* Render other college details from collegeDetails */}
      <p>Location: {admissionDate}</p>
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
      <p className="font-semibold">Research Works:</p>
      <ul>
        {research_works && research_works.map((research, index) => (
          <li className='border-l-4 border-blue-800 bg-slate-200 my-2 p-2' key={index}>{research.title}</li>
        ))}
      </ul>
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
    </div>
  );
};

export default MyAdmissionCard;
