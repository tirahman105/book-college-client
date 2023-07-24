import { TbWorldSearch, TbCheckbox } from "react-icons/tb";
import { GiNotebook, GiTeacher } from "react-icons/gi";

const Steps = () => {
  return (
    <div className="px-10">
      <h1 className="text-3xl font-bold text-center my-10">Simple steps to start</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="p-8 border hover:-translate-y-2 transition duration-500 cursor-pointer hover:shadow-lg hover:bg-slate-100">
          <div className="">
            <TbWorldSearch className="h-28 w-28 text-xl bg-[#3F5361] p-5 rounded-full text-blue-100 "></TbWorldSearch>
          </div>
          <h1 className="text-2xl font-semibold mt-3">Search</h1>
          <p>
          Utilize the powerful search feature to find the information you need quickly and efficiently.
          </p>
        </div>

        <div className="p-8 border hover:-translate-y-2 transition duration-500 cursor-pointer hover:shadow-lg hover:bg-slate-100">
          <div className="">
            <TbCheckbox className=" h-28 w-28 text-xl bg-[#3F5361] p-5 rounded-full text-blue-100"></TbCheckbox>
          </div>
          <h1 className="text-2xl font-semibold  mt-3">Choose</h1>
          <p>
          Select from a wide range of options and pick the one that best suits your preferences and requirements.
          </p>
        </div>
        <div className="p-8 border hover:-translate-y-2 transition duration-500 cursor-pointer hover:shadow-lg hover:bg-slate-100">
          <div className="">
            <GiNotebook className=" h-28 w-28  bg-[#3F5361] p-5 rounded-full text-blue-100"></GiNotebook>
          </div>
          <h1 className="text-2xl font-semibold  mt-3">Enroll</h1>
          <p>
          Take the next step towards your goals by enrolling in our comprehensive and engaging courses.
          </p>
        </div>
        <div className="p-8 border hover:-translate-y-2 transition duration-500 cursor-pointer hover:shadow-lg hover:bg-slate-100">
          <div className="">
            <GiTeacher className=" h-28 w-28 text-xl bg-[#3F5361] p-5 rounded-full text-blue-100"></GiTeacher>
          </div>
          <h1 className="text-2xl font-semibold  mt-3">Start</h1>
          <p>
          Begin your journey of learning and growth as soon as you're ready with just a simple click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
