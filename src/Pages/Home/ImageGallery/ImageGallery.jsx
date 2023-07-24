import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ImageGallery = () => {

  useEffect(()=> {
    Aos.init({duration: 1500});
  },[])
  const images = [
    'https://i.ibb.co/FHTx92m/4.jpg',
    'https://i.ibb.co/4pM87y7/5.jpg',
    'https://i.ibb.co/fXc0NrK/6.jpg',
    'https://i.ibb.co/hBSRPTh/1.jpg',
    'https://i.ibb.co/JH4rPyB/2.jpg',
    'https://i.ibb.co/4NdKZ15/3.jpg',
  ];

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-center text-3xl my-8">Image Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
              data-aos="zoom-in"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;