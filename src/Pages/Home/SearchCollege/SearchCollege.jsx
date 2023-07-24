
// // import { useLoaderData } from 'react-router-dom';
// // import CollegeCard from '../../Colleges/CollegeCard';
// // import { useEffect, useState } from 'react';


// // const SearchCollege = () => {
// //     const [colleges, setColleges] = useState([]);
 

   

// //     useEffect(() => {
// //         fetch('https://book-college-server-amber.vercel.app/colleges')
// //           .then((res) => res.json())
// //           .then((result) => {
// //             setColleges(result);
// //           });
// //       }, []);

// //     return (
// //         <div>
            
// //             <div className="grid md:grid-cols-3 gap-4 p-4">
// //                   {
// //                       colleges.map(college=> <CollegeCard
// //                       key={college._id}
// //                       college= {college}>
// //                       </CollegeCard>)
// //                   }
// //                </div>
            
// //         </div>
// //     );
// // };

// // export default SearchCollege;

// import { useLoaderData } from 'react-router-dom';
// import CollegeCard from '../../Colleges/CollegeCard';
// import { useEffect, useState } from 'react';

// const SearchCollege = () => {
//   const [colleges, setColleges] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredColleges, setFilteredColleges] = useState([]);

//   useEffect(() => {
//     fetch('https://book-college-server-amber.vercel.app/colleges')
//       .then((res) => res.json())
//       .then((result) => {
//         setColleges(result);
//       });
//   }, []);

//   // Function to handle search input change and filter colleges
//   const handleSearch = (e) => {
//     const searchValue = e.target.value;
//     setSearchQuery(searchValue);

//     if (searchValue.trim() === '') {
//       // If the search input is empty, display no colleges
//       setFilteredColleges([]);
//     } else {
//       // Filter the colleges based on the search input
//       const filtered = colleges.filter((college) =>
//         college.name.toLowerCase().includes(searchValue.toLowerCase())
//       );
//       setFilteredColleges(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className='flex justify-center p-8 bg-[#3F5361] '>
//         <div> 
//             <h1 className='text-3xl font-bold text-white'>Find Your Desire College</h1>
//         <div className="mt-2 w-full">
//         <input
//           type="text"
//           placeholder="Search college..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-2 border border-gray-400 rounded-md w-full"
//         />
//       </div>
//       </div>
//       </div>
//       <div className="grid md:grid-cols-3 gap-4 p-4">
//         {searchQuery.trim() !== '' // If search query is not empty, display filtered colleges
//           ? filteredColleges.map((college) => (
//               <CollegeCard key={college._id} college={college} />
//             ))
//           : colleges.map((college) => (
//             <CollegeCard key={college._id} college={college} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default SearchCollege;


import { Link, useLoaderData } from 'react-router-dom';
import CollegeCard from '../../Colleges/CollegeCard';
import { useEffect, useState } from 'react';

const SearchCollege = () => {
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);

  useEffect(() => {
    fetch('https://book-college-server-amber.vercel.app/colleges')
      .then((res) => res.json())
      .then((result) => {
        setColleges(result);
      });
  }, []);

  // Function to handle search input change and filter colleges
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchQuery(searchValue);

    if (searchValue.trim() === '') {
      // If the search input is empty, display the first three colleges by default
      setFilteredColleges(colleges.slice(0, 3));
    } else {
      // Filter the colleges based on the search input
      const filtered = colleges.filter((college) =>
        college.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredColleges(filtered);
    }
  };

  return (
    <div>
      <div className='flex justify-center p-8 bg-[#3F5361] '>
        <div> 
            <h1 className='text-3xl font-bold text-white'>Find Your Desire College</h1>
        <div className="mt-2 w-full">
        <input
          type="text"
          placeholder="Search college..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-400 rounded-md w-full"
        />
      </div>
      </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 p-4">
        {searchQuery.trim() !== '' // If search query is not empty, display filtered colleges
          ? filteredColleges.map((college) => (
              <CollegeCard key={college._id} college={college} />
            ))
          : colleges.slice(0, 3).map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
        
      </div>
      <div className='flex justify-center items-center mb-5'> <Link to='/colleges'><button className='btn bg-blue-800 text-white hover:bg-blue-700'> See All Colleges</button></Link></div>
    </div>
  );
};

export default SearchCollege;
