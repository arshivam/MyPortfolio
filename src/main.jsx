import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects';
import ProfileInfo from './components/ProfileInfo.jsx';
import Skill from './components/Skill.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <><ProfileInfo/><Footer/></>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path : "contact",
        element : <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
