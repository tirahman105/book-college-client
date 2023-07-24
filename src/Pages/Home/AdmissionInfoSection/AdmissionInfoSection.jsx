import React from 'react';

const AdmissionInfoSection = () => {
    return (
        <div className='px-10 bg-gradient-to-r from-cyan-100 to-slate-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <img className='' src="https://i.ibb.co/j6Z2CRT/man.png" alt="" />
                </div>
               <div className='flex justify-center items-center'>
               <div>
                    <h1 className='text-3xl font-bold my-4'>All types of university admission information can be found here</h1>
                    <p>Welcome to our comprehensive platform where you can find all types of university admission information! Whether you're a high school graduate looking to pursue higher education, a transfer student seeking new opportunities, or even an international applicant exploring global study options, we've got you covered.

Our user-friendly website provides a wealth of resources, including admission requirements, application deadlines, program details, scholarship opportunities, and much more. With an extensive database of universities and colleges from around the world, you'll be able to discover the perfect fit for your academic aspirations.</p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default AdmissionInfoSection;