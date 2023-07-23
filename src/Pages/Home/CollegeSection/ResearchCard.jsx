import React from 'react';

const ResearchCard = ({research}) => {
    return (
        <div>
        <div className='grid grid-cols-1 gap-3 border p-2 rounded-lg shadow-md'>
            <div className="flex justify-center items-center" >
            {research.image && (
          <img className=" rounded-lg" src={research.image} alt={research.name} />
        )}
            </div>
            <div>
            <h1 className='text-center text-xl font-bold'>{research.title}</h1>
      <p className="text-center  my-2"> <span className='font-bold'>Authors:</span> {research.authors}</p>
                <hr />
      <p className="mt-3">{research.abstract}</p>
            </div>

        </div>
    </div>
    );
};

export default ResearchCard;