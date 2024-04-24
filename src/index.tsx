import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerInfo } from 'router';
import 'utils/i18n';
import "styles/index.scss"
import { Provider } from 'components/Provider';

const router = createBrowserRouter(routerInfo)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
