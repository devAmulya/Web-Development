import { useState } from 'react'
import './App.css'
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParaComp from './components/ParamComp'
import Courses from './components/Courses'
import Exams from './components/Exams'
import Reports from './components/Reports'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: <div>
                <Navbar />
                <About />
              </div>
    },
    // Works if link not used
    // {
    //   path: '/dashboard',
    //   element: <Dashboard/>
    // } ,
    {
      path: '/dashboard',
      element: <div>
        <Navbar />
        <Dashboard />
      </div>,
      children:[
        {
          path: 'courses',
          element: <Courses />
        },
        {
          path: 'exams',
          element: <Exams />
        },
        {
          path: 'reports',
          element: <Reports />
        }
      ]
    },
    {
      path: '/student/',
      element: <div>
                  <Navbar />
                  <ParaComp />
                </div>
    },
    {
      path: '/student/:id',
      element: <div>
                  <Navbar />
                  <ParaComp />
                </div>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router = {router} />
    </div>
  )
}

export default App
