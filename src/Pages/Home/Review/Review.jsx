// import React, { useEffect, useState } from 'react';
// // import ReviewCard from './ReviewCard';
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Aos from "aos";
// import 'aos/dist/aos.css'


// const Review = () => {
//     const [reviews, setReviews] = useState([]);
 

   

//     useEffect(() => {
//         fetch('http://localhost:5000/reviews')
//           .then((res) => res.json())
//           .then((result) => {
//             setReviews(result);
//           });
//       }, []);

//       const sliderSettings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//             },
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       };
//     return (
//         // <div>
//         //     <h1 className='text-3xl'>Reviews</h1>
//         //     <div className="grid md:grid-cols-3 gap-4 p-4">
//         //           {
//         //               reviews.map(review=> <ReviewCard
//         //               key={review._id}
//         //               review= {review}>
//         //               </ReviewCard>)
//         //           }
//         //        </div>
//         // </div>

//         <div className="p-4">
//       <h2 className="text-2xl font-bold text-center my-8 mb-4">Customer Reviews</h2>
//       <Slider {...sliderSettings}>
//         {reviews.map((review) => (
//           <div key={review.id} className="px-2" data-aos="zoom-out-left">
//             <div className="bg-white  hover:bg-[#FDEEDC] transition duration-300 ease-in-out rounded-lg shadow-md p-6">
//               <figure className="mb-4 ">
//                 <img
//                   className="w-32 h-32 rounded-full mx-auto transform hover:scale-125 transition duration-300 ease-in-out"
//                   src={review.CandidateImg}
//                   alt="Reviewer"
//                 />
//               </figure>
//               <div className="text-center">
//                 <h2 className="text-lg font-semibold">{review.collegeName}</h2>
//                 <p className="text-gray-600">{review.review}</p>
//               </div>
             
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//     );
// };

// export default Review;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 my-4">
      <h2 className="text-2xl font-bold text-center my-8 mb-4">Student Reviews</h2>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-2" data-aos="zoom-out-left">
            <div className="bg-white hover:bg-slate-100 transition duration-300 ease-in-out rounded-lg shadow-md p-6">
              <figure className="mb-4">
                <img
                  className="w-32 h-32 rounded-full mx-auto transform hover:scale-125 transition duration-300 ease-in-out"
                  src={review.CandidateImg}
                  alt="Reviewer"
                />
              </figure>
              <div className="text-center">
                <h2 className="text-lg font-semibold">{review.CandidateName}</h2>
                <h2 className="text-base  mb-3">{review.collegeName}</h2>
                <hr />
                <p className="text-gray-600 mt-4">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
