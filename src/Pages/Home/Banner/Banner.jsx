import React from 'react';
import banner from '../../../assets/bg-college.png';

const Banner = () => {
  return (
    // <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold">Admit to your Desire College</h1>
    //       <p className="mb-5">Your Easy solution to admit College.</p>
    //       {/* <div className="flex justify-center items-center mb-5">
    //         <input type="text" className="border rounded p-2 mr-2" placeholder="Search College..." />
    //         <button className="btn btn-primary">Search</button>
    //       </div> */}
          
    //     </div>
    //   </div>
    // </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <div className='flex justify-center items-center'>
         <div className='p-10'>
          <p>Easy and simple !</p>
         <h1 className='text-3xl font-bold my-4'>A world-class education is applicable for building the future</h1>
          <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold text-blue-800'>Get Admission </h1>
         </div>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-vector/university-college-students-characters-young-people-standing-outdoors-vector_125133-1797.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
