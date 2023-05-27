import ParallaxContainer from "../../../Components/PerallaxConteiner/ParallaxContainer";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Header from "../Header/Header";
import img from '../../../assets/home/chef-service.jpg'
import Slider from "../Slider/Slider";
import CallToAction from "../CalltoAction/CallToAction";

import { UseData } from "../../../hooks/UseData/UseData";
import MenuCard from "../../../Components/Menu/MenuCard/MenuCard";
import Card from "../../../Components/Card/Card";
import MenuSection from "../MenuSection/MenuSection";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    const [menus]=UseData()
    return (
        <div>
           <Header/>
           <div className=" mx-20">
           <SectionTitle heading='ORDER ONLINE' subHeading='---From 11:00am to 10:00pm---' />
           <Slider/>
           <ParallaxContainer title='Tatka boss' img={img} subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
           <SectionTitle heading='FROM OUR MENU' subHeading='---Check it out---' />
           <div className="grid grid-cols-2 ">
            {
             menus.slice(0,6).map((menu)=><MenuCard key={menu._id} menu={menu} />)
            }
           </div>
           <div className=" flex my-6 justify-center "><button className="btn-primary">View Full  Menu</button></div>
          <CallToAction/>
          <SectionTitle heading='CHEF RECOMMENDS' subHeading='---Should Try---' />
          <Card/>
          <MenuSection/>
          <Testimonials/>
           </div>
        </div>
    );
};

export default Home;