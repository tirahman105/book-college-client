import React from 'react';
import { FaUserPlus } from 'react-icons/fa';

const AdmissionCollegeCard = ({college}) => {
    const {_id, name, image,admissionDate, events, research_works, sports_categories } = college;
    return (
        <div className='shadow-lg p-4 rounded-lg'>
            <div>
                <img className='w-1/2 rounded-xl mx-auto' src={image} alt="" />
            </div>
            <h1 className='text-xl font-bold text-center'>{name}</h1>
            <p className="  flex justify-center items-center gap-2"> <FaUserPlus></FaUserPlus> <span> Admission open: {admissionDate}</span></p>
            <div className='flex items-center justify-center mt-4'>
            <button className='text-center btn btn-primary'>Get Admission</button>
            </div>
           
        </div>
    );
};

export default AdmissionCollegeCard;