import React from "react";
import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";

const CollegeDetails = () => {
  const colleges = useLoaderData();
  const {
    _id,
    name,
    image,
    location,
    about,
    admissionDate,
    events,    
admission_process,
    researchHistory,
    sports,
  } = colleges;
  return (
    <div>
      <div className="p-10 bg-[#3F5361] text-center text-white">
        <h1 className="text-3xl font-bold text-white p-4">{name}</h1>
        <hr />

        <h1>Admission Date: {admissionDate}</h1>
      </div>
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 mt-2">
        <div>
          <img className="w-3/4 mx-auto rounded-lg " src={image} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">About: {name} </h1>
          <h1 className="my-2 text-xl">Location: {location} </h1>
          <p className="text-lg">{about}</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold p-10 text-center">Admission Process</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="flex justify-center items-center">
        <img className="rounded" src="https://i.ibb.co/k39MQPv/steps2.jpg" alt="" />
      </div>
      <div >
      <ul className="p-4">
        {admission_process.map((step, index) => (
          <li className="bg-slate-200 my-2 p-4 rounded text-lg font-semibold" key={index}>{index+1}. {step}</li>
        ))}
      </ul></div>
      </div>
      <div>
        <h1 className="text-2xl font-bold p-10 text-center">Upcoming Events</h1>

        <div className="grid md:grid-cols-2 gap-4 p-4 mx-auto justify-center">
                  {
                      events && events.map((event, index)=> <EventCard
                      key={index}
                      event= {event}>
                      </EventCard>)
                  }
               </div>
        <div>
          
        </div>
      </div>

    </div>
  );
};

export default CollegeDetails;
