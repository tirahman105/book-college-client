
import AdmissionInfoSection from "../AdmissionInfoSection/AdmissionInfoSection";
import Banner from "../Banner/Banner";
import CollegeSection from "../CollegeSection/CollegeSection";
import ImageGallery from "../ImageGallery/ImageGallery";
import Review from "../Review/Review";
import Steps from "../Steps/Steps";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollegeSection></CollegeSection>
            <AdmissionInfoSection></AdmissionInfoSection>
            <ImageGallery></ImageGallery>
            <Steps></Steps>
            <Review></Review>
        </div>
    );
};

export default Home;