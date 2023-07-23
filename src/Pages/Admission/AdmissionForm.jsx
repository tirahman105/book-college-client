import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useParams } from "react-router-dom";

const AdmissionForm = () => {
  const { user } = useContext(AuthContext);
  const { collegeId } = useParams(); // Access the collegeId from the URL parameter

  // State to store the college data
  const [collegeData, setCollegeData] = useState(null);

  useEffect(() => {
    // Fetch the specific college data using the collegeId
    // Replace this with your data-fetching logic
    const fetchCollegeData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/colleges/details/${collegeId}`);
        const data = await response.json();
        setCollegeData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching college data:", error);
      }
    };

    fetchCollegeData();
  }, [collegeId]);


  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

 

 

  const onSubmit = (data) => {
    const admission = {
      
      CollegeName: data.CollegeName,
      CandidateName: data.name,
      CadidateEmail: data.email,
      mobile: data.mobile,
      Subject: data.subject,
      DOB:data.dob,
      imgUrl : data.imgUrl
    };

    fetch("http://localhost:5000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admission),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Success!", "Admission form submit successful.", "success").then(
          () => {
            reset();
          }
        );
      });
  };

  return (
    <div>
      This is the admission form
      <div className="w-full">
        <div className="p-8 border-solid border-2 border-blue-100 bg-blue-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-7 w-3/4 mx-auto bg-white rounded-3xl shadow-md"
          >
            <h1 className="text-3xl text-center font-semibold my-4">
              Admission Form for {collegeData?.name}
            </h1>
            <div className="divider"></div>

            <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <label htmlFor="CollegeName" className="block text-gray-700">
                  College Name
                </label>
                <input
                  type="text"
                  id="CollegeName"
                  defaultValue={collegeData?.name} // Set college name as default value
                  {...register("CollegeName", { required: true, maxLength: 80 })}
                  className="w-full border bg-slate-200 border-gray-300 rounded px-3 py-2 mt-1"
                  readOnly placeholder={collegeData?.name}
                />
              </div>
            <div >
              <label htmlFor="name" className="block text-gray-700">
              Candidate Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
              Candidate Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div >
              <label htmlFor="mobile" className="block text-gray-700">
              Candidate Contact No.
              </label>
              <input
                type="tel"
                id="mobile"
                {...register("mobile", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
        
             <div>
        <label htmlFor="subject" className="block text-gray-700">
          Select Subject
        </label>
        <select
          id="subject"
          {...register("subject", { required: true })}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        >
          <option value="">Select Subject</option>
          {collegeData?.subjects?.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
            <div>
              <label htmlFor="dob" className="block text-gray-700">
              Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                {...register("dob", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700">
              Address
              </label>
              <input
                type="text"
                id="address"
                {...register("address", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="imgUrl" className="block text-gray-700">
              Image url
              </label>
              <input
                type="url"
                id="imgUrl"
                {...register("imgUrl", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            </div>

        

            <div className="text-center">
              <input
                type="submit"
                value="Submit"
                className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
