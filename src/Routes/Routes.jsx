import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
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
    }
  ]
  },
]);
export default router;