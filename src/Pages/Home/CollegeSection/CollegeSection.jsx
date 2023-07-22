
import { useLoaderData } from 'react-router-dom';
import CollegeCard from '../../Colleges/CollegeCard';
import { useEffect, useState } from 'react';


const CollegeSection = () => {
    const [colleges, setColleges] = useState([]);
 

   

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
          .then((res) => res.json())
          .then((result) => {
            setColleges(result);
          });
      }, []);

    return (
        <div>
            
            <div className="grid md:grid-cols-3 gap-4 p-4">
                  {
                      colleges.map(college=> <CollegeCard
                      key={college._id}
                      college= {college}>
                      </CollegeCard>)
                  }
               </div>
            
        </div>
    );
};

export default CollegeSection;