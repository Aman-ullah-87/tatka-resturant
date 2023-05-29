import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const MainLayout = () => {
    const location=useLocation();
    const isLogging=location.pathname.includes('login')||location.pathname.includes('signup')
    return (
        <div>
            {isLogging ||<Navbar/>}
            <Outlet/>
            {isLogging ||<Footer/>}
        </div>
    );
};

export default MainLayout;