import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[{
        path:"/",
        element:<Home/>,
    },
    {
       path:"/menu",
       element:<Menu/>
    },
    {
      path:'login',
      element:<Login/>
    },{
      path:'signup',
      element:<SignUp/>
    }
  ]
  },
]);
export default router;