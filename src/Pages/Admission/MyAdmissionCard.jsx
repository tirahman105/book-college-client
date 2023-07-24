
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyAdmissionCard = ({ admission }) => {
  const [collegeDetails, setCollegeDetails] = useState(null);
  const [review, setReview] = useState('');
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        // Fetch college details based on the college name from collegeCollection
        const response = await fetch(`https://book-college-server-amber.vercel.app/colleges/details/name/${admission.name}`);
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

  const { _id, name, location, image, admissionDate, events, research_works, sports_categories } = collegeDetails;

  const createdAtDate = new Date(admission?.createdAt);
  const formattedCreatedAt = createdAtDate.toLocaleString();

  const handleCloseModal = () => {
    setReview('');
  };

  const onSubmit = (data) => {
    const review = {
      
      collegeName: data.collegeName,
      CandidateName: data.name,
      CandidateImg:data.imgUrl,
      email: data.email,
      review: data.review,
     
    };

    fetch("https://book-college-server-amber.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Success!", "Review submit successful.", "success").then(
          () => {
            reset();
          }
        );
      });
  };

  return (
    <div>
      <div className="bg-[#3F5361] p-10 text-white text-center">
                  <h1 className="text-3xl font-bold ">My College</h1>
                  <p className="my-3 text-3xl">{name} </p>
                  <Link to={`/colleges/${_id}`}>
          <button className="btn bg-blue-800 text-white hover:bg-blue-700 transition duration-300 hover:text-white">
            View Details
          </button>
        </Link>
                </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img src={image} alt="" />
        </div>
        <div className='bg-slate-300 ps-10 pt-4'>
          <h1 className='text-2xl font-bold'>{name}</h1>
          <p>Location: {location}</p>
          <hr />
          {/* <img src={admission.imgUrl} alt="" /> */}
          <h1>My Subject: {admission?.Subject} </h1>
          <h1>Application submit Date and time: {formattedCreatedAt} </h1>
          <div className="mb-2">
            <p className="font-semibold flex items-center gap-4 mt-5"> <BsFillCalendarEventFill /> <span>Upcoming Events:</span></p>
            <ul>
              {events && events.map((event, index) => (
                <li className='border-l-4 w-1/2 rounded-xl border-blue-800 bg-slate-200 my-2 p-2' key={index}>{event.name}</li>
              ))}
            </ul>
          </div>
          <hr />

          <button className='btn btn-success mt-5' onClick={() => setReview(_id)}>Add Review</button>
          {_id && (
            <dialog id={_id} className="modal modal-bottom sm:modal-middle" open={review !== ''}>
              <form
               onSubmit={handleSubmit(onSubmit)}
                method="dialog"
                className="modal-box"
              >
                <h3 className="font-bold text-lg">{name}</h3>
                <div >
              <label htmlFor="collegeName" className="block text-gray-700">
             College Name
              </label>
              <input
                type="text"
                id="collegeName"
                defaultValue={name}
                {...register("collegeName", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                readOnly
                
              />
            </div>
                <div >
              <label htmlFor="name" className="block text-gray-700">
              Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={admission?.CandidateName}
                {...register("name", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                readOnly
                
              />
            </div>
            <div className='hidden'>
              <label htmlFor="imgUrl" className="block text-gray-700">
              Image url
              </label>
              <input
                type="url"
                id="imgUrl"
                defaultValue={admission?.imgUrl}
                {...register("imgUrl", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
              Candidate Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={admission?.email}
                {...register("email", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div >
              <label htmlFor="review" className="block text-gray-700">
              Review
              </label>
              <input
                type="text"
                id="review"
                {...register("review", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
         
                <div className="modal-action">
                  <button type="submit" className="btn">
                    Add review
                  </button>
                  <button type="button" className="btn btn-error" onClick={handleCloseModal}>
                    Close
                  </button>
                </div>
              </form>
            </dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAdmissionCard;
