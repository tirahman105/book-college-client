import React from 'react';

const ProfileDetails = ({user, index}) => {

    const {
        _id,
       name,
       address,
       university,
       photo,
        email,
      } = user;
    return (
        <div>
            <img src={photo} alt="" />
                    <h1 className='text-lg'>Name: {name}</h1>
                    <h1 className='text-lg'>Email: {email}</h1>
        </div>
    );
};

export default ProfileDetails;