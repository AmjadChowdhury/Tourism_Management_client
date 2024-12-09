import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home';
import AllTouristsSpot from './Components/AllTouristsSpot';
import AddTouristsSpot from './Components/AddTouristsSpot';
import AuthProvider from './Provider/AuthProvider';
import Register from './Components/Register';
import Login from './Components/Login';
import MyList from './Components/MyList';
import EditTouristsSpot from './Components/EditTouristsSpot';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/alltouristsspot",
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: "/addtouristsspot",
        element: <AddTouristsSpot></AddTouristsSpot>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/mylist",
        element: <MyList></MyList>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: "/spot/:id",
        element: <EditTouristsSpot></EditTouristsSpot>,
        loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
