import Hero from "@/components/Home/Hero"
import LogoSection from './../components/Home/LogoSection';
import KeyBenefits from "@/components/Home/KeyBenefits";
import Timeline from "@/components/Home/Timeline";
import Understand from "@/components/Home/Understand";
import WhoHelp from "@/components/Home/WhoHelp";
import TestimonialSlider from "@/components/Home/TestimonialCarousel";
import Recharts from "@/components/shared/Recharts";


const Home = () => {
  return (
    <div className="web-container px-4 md:px-10 mt-10 lg:mt-24">
         <Hero/> 
         <LogoSection/>
         <KeyBenefits/>
         <Timeline/>
         <Understand/>
         <WhoHelp/>
         <TestimonialSlider/>
         <Recharts/>
    </div>
  )
}

export default Home