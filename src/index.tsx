import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerInfo } from 'router';
import 'utils/i18n';
import "styles/index.css"

const router = createBrowserRouter(routerInfo)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
