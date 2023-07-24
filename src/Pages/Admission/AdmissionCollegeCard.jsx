// import React from 'react';
// import { FaUserPlus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const AdmissionCollegeCard = ({college}) => {
//     const {_id, name, image,admissionDate, events, research_works, sports_categories } = college;
//     return (
//         <div className='shadow-lg p-4 rounded-lg'>
//             <div>
//                 <img className='w-1/2 rounded-xl mx-auto' src={image} alt="" />
//             </div>
//             <Link to='admissionform'><h1 className='text-xl font-bold text-center'>{name}</h1></Link>
//             <p className="  flex justify-center items-center gap-2"> <FaUserPlus></FaUserPlus> <span> Admission open: {admissionDate}</span></p>
//             <div className='flex items-center justify-center mt-4'>
//             <button className='text-center btn btn-primary'>Get Admission</button>
//             </div>
           
//         </div>
//     );
// };

// export default AdmissionCollegeCard;

import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdmissionCollegeCard = ({ college }) => {
  const { _id, name, image, admissionDate, events, research_works, sports_categories } = college;

  // Pass the college ID as a URL parameter
  const admissionFormLink = `/admissionform/${_id}`;

  return (
    <div className='shadow-lg p-4 rounded-lg'>
      <div>
        <img className='w-1/2 rounded-xl mx-auto' src={image} alt="" />
      </div>
      {/* Use the updated link */}
      <Link to={admissionFormLink}>
        <h1 className='text-xl font-bold text-center'>{name}</h1>
      </Link>
      <p className="flex justify-center items-center gap-2"> <FaUserPlus></FaUserPlus> <span> Admission open: {admissionDate}</span></p>
      <div className='flex items-center justify-center mt-4'>
       
      </div>
    </div>
  );
};

export default AdmissionCollegeCard;
