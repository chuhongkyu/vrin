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
      errorElement: <NotFound/>,
      children: [
        {
          path: "pricing",
          element: <Price/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "register",
          element: <Register/>,
        },
        {
          path: "event",
          element: <Event/>,
        }
      ]
    },   
]