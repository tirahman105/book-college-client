import React from 'react';
import banner from '../../../assets/bg-college.png';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Admit to your Desire College</h1>
          <p className="mb-5">Your Easy solution to admit College.</p>
          <div className="flex justify-center items-center mb-5">
            <input type="text" className="border rounded p-2 mr-2" placeholder="Search College..." />
            <button className="btn btn-primary">Search</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
