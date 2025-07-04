/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
//import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';
import Login from './Component/Login';
import ErrorPage from './Component/ErrorPage'; // Import the ErrorPage component
import ProductDetail from './Component/ProductDetail'; // Import the ProductDetail component
import ThemeProvider from './Context/ThemeContext'; // ✅ Correct

const Contact = React.lazy(() => import('./Component/Contact'));


const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Login />, // Set the default route to the Login component
        
    // },
    {
        path: "/",
        element: <Nav />,
       
        children: [
            {
                index: '/home', // This will render the Home component when navigating to /nav
                element: <Home />
            },
            
            {
                path: "/home", // nav bar name No leading slash
                element: <Home />  // this is file name
            },
            {
                path: "/about", // No leading slash
                element: <Aboutus />
            },
            {
                path: "/contact", // No leading slash
                //element: <Contact />
                element: (
                    <React.Suspense>
                        <Contact />
                    </React.Suspense>
                )
            },
            {
                path: "/portfolio", // No leading slash
                element: <Portfolio />
            },
            {
                path: "/product", // No leading slash
                element: <App />
            },
            {
                path: "/readmore/:id", // No leading slash
                element: <ProductDetail />
            },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     
     <ThemeProvider>                                                                             
            
            <RouterProvider router={router} >
           
            </RouterProvider>

     </ThemeProvider> 
);
