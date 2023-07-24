
import { useLoaderData } from 'react-router-dom';
import CollegeCard from './CollegeCard';

const Colleges = () => {
    const colleges = useLoaderData();
    return (
        <div>
            <div className="bg-[#3F5361] p-10 text-white text-center">
                  <h1 className="text-3xl font-bold ">All Colleges</h1>
                  <p className="mt-3">All Colleges with details </p>
                </div>
            <div className="grid md:grid-cols-3 gap-4">
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

export default Colleges;