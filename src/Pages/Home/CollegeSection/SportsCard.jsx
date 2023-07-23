import React from 'react';

const SportsCard = ({sports}) => {
    return (
        <div>
        <div className=' border p-2 rounded-lg shadow-md'>
            <div className="flex justify-center items-center hover:scale-110 transition duration-500 cursor-pointer" >
            {sports.image && (
          <img className="w-1/2 rounded-lg" src={sports.image} alt={sports.name} />
          
        )}
            </div>
        <h1 className='text-center mt-4'>{sports.name}</h1>
            

        </div>
    </div>
    );
};

export default SportsCard;