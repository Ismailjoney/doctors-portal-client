import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appionmrnts from "../../page/Appionments/Appionments/Appionmrnts";
import Dasbord from "../../page/Dashbord/Dashbord/Dasbord";
import Home from "../../page/Home/Home/Home";
import Login from "../../page/Login/Login";
import Singup from "../../page/SingUp/Singup";

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
        element: <Dasbord></Dasbord>
    }
])