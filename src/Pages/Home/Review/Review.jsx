import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);
 

   

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
          .then((res) => res.json())
          .then((result) => {
            setReviews(result);
          });
      }, []);
    return (
        <div>
            <h1 className='text-3xl'>Reviews</h1>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                  {
                      reviews.map(review=> <ReviewCard
                      key={review._id}
                      review= {review}>
                      </ReviewCard>)
                  }
               </div>
        </div>
    );
};

export default Review;