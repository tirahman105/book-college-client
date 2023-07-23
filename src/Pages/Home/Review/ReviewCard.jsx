import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div>
            <img src={review?.CandidateImg} alt="" />
            {review.collegeName}
            <h1>{review.CandidateName}</h1>
            <h1>{review.review}</h1>
        </div>
    );
};

export default ReviewCard;