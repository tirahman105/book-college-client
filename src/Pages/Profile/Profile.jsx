
import { useLoaderData } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';

const Profile = () => {
    const users = useLoaderData();

    return (
        <div>
            User profile: Welcome {users.length}

            <div className='bg-slate-200 p-12 rounded-lg'>
            {
                            users.map((user, index) => <ProfileDetails
                                key={user._id}
                                user={user}
                                index={index +1}
                               
                            ></ProfileDetails>)
                        }
                    
            </div>
        </div>
    );
};

export default Profile;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Profile = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch user data based on the id
//     fetch(`http://localhost:5000/details/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         setUser(data); // Set the user data in the state
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <div>User not found.</div>;
//   }

//   // Render the profile details
//   return (
//     <div>
//       <img src={user.photo} alt="" />
//       <h1 className="text-lg">Name: {user.name}</h1>
//       <h1 className="text-lg">Email: {user.email}</h1>
//       {/* Render other user details as needed */}
//     </div>
//   );
// };

// export default Profile;
