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
                {/* admission route: {colleges.length} */}
                <div className="bg-[#3F5361] p-10 text-white text-center">
                  <h1 className="text-3xl font-bold ">Admission</h1>
                  <p className="mt-3">Select College Where you want to get admitted</p>
                </div>
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