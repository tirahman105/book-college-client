
import { useLoaderData } from 'react-router-dom';
import CollegeCard from './CollegeCard';

const Colleges = () => {
    const colleges = useLoaderData();
    return (
        <div>
            
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