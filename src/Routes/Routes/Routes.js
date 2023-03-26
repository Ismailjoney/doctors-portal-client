import { createBrowserRouter } from "react-router-dom";
import DashbordLayOut from "../../Layout/DashbordLayOut";
import Main from "../../Layout/Main";
import Appionmrnts from "../../page/Appionments/Appionments/Appionmrnts";
import AddDoctor from "../../page/Dashbord/addDoctor/AddDoctor";
import AllUsers from "../../page/Dashbord/allUsers/AllUsers";
import Dasbord from "../../page/Dashbord/Dashbord/Dasbord";
import ManageDoctors from "../../page/Dashbord/manageDoctors/ManageDoctors";
import MyAppionment from "../../page/Dashbord/MyAppionment/MyAppionment";
import Payment from "../../page/Dashbord/Payment/Payment";
import Home from "../../page/Home/Home/Home";
import Login from "../../page/Login/Login";
import DisplayError from "../../page/Shared/DisplayError/DisplayError";
import Singup from "../../page/SingUp/Singup";
import AdminPrivetRoute from "../PrivetRoute/AdminPrivetRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement :<DisplayError></DisplayError>,
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
        errorElement :<DisplayError></DisplayError>,
        children : [
            {
                path:'/dashbord',
                element:<MyAppionment></MyAppionment>
            },
            {
                path:'/dashbord/allusers',
                element: <AdminPrivetRoute><AllUsers></AllUsers></AdminPrivetRoute> 
            },
            {
                path:'/dashbord/adddoctor',
                element: <AdminPrivetRoute><AddDoctor></AddDoctor></AdminPrivetRoute> 
            },
            {
                path:'/dashbord/managedoctors',
                element: <AdminPrivetRoute><ManageDoctors></ManageDoctors></AdminPrivetRoute> 
            },
            {
                path:'/dashbord/payment/:id',
                element:  <Payment></Payment>,
                loader : ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])