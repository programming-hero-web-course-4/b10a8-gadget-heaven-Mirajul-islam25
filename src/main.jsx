import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Details from './Components/Details/Details';
import { HelmetProvider } from 'react-helmet-async';
import BestDeals from './Components/BestDeals/BestDeals';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'Dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'Product-Details/:id',
        loader:()=>fetch('/Data.json'),
        element:<Details></Details>
      },
      {
        path:'Best-Deals',
        element:<BestDeals></BestDeals>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <HelmetProvider>

  
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
  </HelmetProvider>,
)
