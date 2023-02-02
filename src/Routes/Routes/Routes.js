import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appionmrnts from "../../page/Appionments/Appionments/Appionmrnts";
import Home from "../../page/Home/Home/Home";
import Login from "../../page/Login/Login";

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
                path: '/appionment',
                element: <Appionmrnts></Appionmrnts>
            }
        ]
    }
])