import { useEffect, useState } from "react";
import AdmissionCollegeCard from "./AdmissionCollegeCard";



const Admission = () => {
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
                admission route: {colleges.length}
                <div className="grid md:grid-cols-3 gap-4 p-4">
                  {
                      colleges.map(college=> <AdmissionCollegeCard
                      key={college._id}
                      college= {college}>
                      </AdmissionCollegeCard>)
                  }
               </div>
        </div>
    );
};

export default Admission;