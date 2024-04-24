import App from "App";
import NotFound from "NotFound";
import Login from "pages/Login";
import Price from "pages/Price";
import Register from "pages/Register";
import Event from "pages/Event";

export const routerInfo = [
    {
      path: "/",
      element: <App/>,
      errorElement: <NotFound/>
    },
    {
      path: "/pricing",
      element: <Price/>,
      errorElement: <NotFound/>,
    },
    {
      path: "/login",
      element: <Login/>,
      errorElement: <NotFound/>,
    },
    {
      path: "/register",
      element: <Register/>,
      errorElement: <NotFound/>,
    },
    {
      path: "/event",
      element: <Event/>,
      errorElement: <NotFound/>,
    } 
]