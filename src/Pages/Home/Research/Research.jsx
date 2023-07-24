import { FaShuttleVan } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Research = () => {

  useEffect(()=> {
    Aos.init({duration: 1500});
  },[])
  return (
    <div className="px-7 mb-5">
      <h1 className="text-center text-3xl my-4">Research By our Students</h1>
     <div className="divider"></div>
    
      <div>
        <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-4">
            <div className="flex justify-center">
                <img className="w-full md:w-3/4 lg:w-3/4 rounded-lg " src="https://i.ibb.co/4s5gfDm/ai-med.jpg" alt="" />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-xl font-bold">The Role of Artificial Intelligence in Early Cancer Diagnosis</h2>
                  <p>Benjamin Hunter, Sumeet Hindocha,</p>
                  <hr />
                  <p className="my-3">Diagnosing cancer at an early stage increases the chance of performing effective treatment in many tumour groups. Key approaches include screening patients who are at risk but have no symptoms, and rapidly and appropriately investigating those who do. Machine learning, whereby computers learn complex data patterns to make predictions, has the potential to revolutionise early cancer diagnosis. </p>
                  <Link to='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8946688/'><button className="btn btn-neutral"> Read More</button></Link>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex justify-center">
                <img className="w-full md:w-3/4 lg:w-3/4  rounded-lg " src="https://i.guim.co.uk/img/media/b00a6f2773f3fa95b1b0e451a2770c0abb00eefe/0_63_3255_1953/master/3255.jpg?width=1200&quality=85&auto=format&fit=max&s=397ca865937aba5fa8427ea3ffb2f819" alt="" />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-xl font-bold">Biodiversity promotes ecosystem functioning despite environmental change</h2>
                  <p>Pubin Hong,  Bernhard Schmid</p>
                  <hr />
                  <p className="my-3">Three decades of research have demonstrated that biodiversity can promote the functioning of ecosystems. Yet, it is unclear whether the positive effects of biodiversity on ecosystem functioning will persist under various types of global environmental change drivers. We conducted a meta‐analysis of 46 factorial experiments manipulating both species richness and the environment to test how global change drivers  </p>
                  <Link to='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9300022/'><button className="btn btn-neutral"> Read More</button></Link>
            </div>
        </div>
      </div>

    
    </div>
  );
};

export default Research;
