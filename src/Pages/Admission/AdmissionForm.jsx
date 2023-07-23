import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AdmissionForm = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

 

 

  const onSubmit = (data) => {
    const order = {
      date: data.date,
      Name: data.Name,
      orderName: data.orderName,
      email: data.email,
      mobile: data.mobile,
      SubCategory: data.SubCategory,
      price: data.price,
      Details: data.Details,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Success!", "Order placement successful.", "success").then(
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
              Admission Form 
            </h1>
            <div className="divider"></div>

            <div className="grid grid-cols-2 gap-4">
            <div >
              <label htmlFor="Name" className="block text-gray-700">
              Candidate Name
              </label>
              <input
                type="text"
                id="Name"
                {...register("Name", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div>
              <label htmlFor="Name" className="block text-gray-700">
              Candidate Email
              </label>
              <input
                type="email"
                id="Email"
                {...register("Email", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div >
              <label htmlFor="Name" className="block text-gray-700">
              Candidate Contact No.
              </label>
              <input
                type="tel"
                id="Mobile"
                {...register("Mobile", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div>
              <label htmlFor="Name" className="block text-gray-700">
              Subject
              </label>
              <input
                type="text"
                id="Subject"
                {...register("Subject", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div>
              <label htmlFor="Name" className="block text-gray-700">
              Date of Birth
              </label>
              <input
                type="date"
                id="Date"
                {...register("Date", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div>
              <label htmlFor="Name" className="block text-gray-700">
              Address
              </label>
              <input
                type="text"
                id="Address"
                {...register("Address", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="Name" className="block text-gray-700">
              Image url
              </label>
              <input
                type="url"
                id="image"
                {...register("image", { required: true })}
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
