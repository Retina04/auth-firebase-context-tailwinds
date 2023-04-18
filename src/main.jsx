import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProviders from './Providers/AuthProviders';
import Orders from './Components/Orders';
import PrivateRoutes from './routes/PrivateRoutes';
import UserProfile from './Components/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>,
      },
      {
        path:'/profile',
        element:<PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProviders>
   
<React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
</AuthProviders>
 
 )
