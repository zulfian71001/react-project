import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Root from "./Root"
import Home from "../pages/Home"
import PrrotectedRoute from "./PrrotectedRoute"
import Dashboard from "../pages/Dashboard"
import DetailProduct from "../pages/DetailProduct"

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                index: true
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/product/:userId",
                element: <DetailProduct/>
            },
            {
                element:<PrrotectedRoute/>,
                children:[
                    {
                        path:"/dashboard",
                        element:<Dashboard/>
                    }
                ]
            }
        ]
    }
])

export default router
