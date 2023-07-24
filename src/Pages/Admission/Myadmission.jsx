


import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyAdmissionCard from './MyAdmissionCard';

const Myadmission = () => {
  const { user } = useContext(AuthContext);
  const [allAdmission, setAllAdmission] = useState([]);

  const url = `https://book-college-server-amber.vercel.app/admission?email=${user?.email}`;

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllAdmission(data);
      } catch (error) {
        console.error('Error fetching admissions:', error);
      }
    };

    fetchAdmissions();
  }, [url]);

  return (
    <div>
      {/* My admission {allAdmission.length} */}
      {allAdmission.map((admission, index) => (
        <MyAdmissionCard key={admission._id} admission={admission} index={index + 1} />
      ))}
    </div>
  );
};

export default Myadmission;
