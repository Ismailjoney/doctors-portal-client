import { createBrowserRouter } from "react-router-dom";
import DashbordLayOut from "../../Layout/DashbordLayOut";
import Main from "../../Layout/Main";
import Appionmrnts from "../../page/Appionments/Appionments/Appionmrnts";
import Dasbord from "../../page/Dashbord/Dashbord/Dasbord";
import MyAppionment from "../../page/Dashbord/MyAppionment/MyAppionment";
import Home from "../../page/Home/Home/Home";
import Login from "../../page/Login/Login";
import Singup from "../../page/SingUp/Singup";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path: '/appionment',
                element: <Appionmrnts></Appionmrnts>
            }
        ]
    },
    {
        path:'/dashbord',
        element: <PrivetRoute><DashbordLayOut></DashbordLayOut></PrivetRoute>,
        children : [
            {
                path:'/dashbord',
                element:<MyAppionment></MyAppionment>
            }
        ]
    }
])