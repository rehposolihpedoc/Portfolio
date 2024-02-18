import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Pages/Error.jsx'
import Contact from './components/Pages/Contact.jsx'
import Home from './components/Pages/home.jsx'
import About from './components/Pages/about.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
