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
