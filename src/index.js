import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/general/App';
import ErrorPage from './components/general/ErrorPage';
import Home from './components/general/Home';
import Login from './components/general/Login';
import Register from './components/general/Register';
import Settings from './components/general/Settings';

import Vehicles from './components/vehicles/Vehicles';
import VehicleDetails from './components/vehicles/VehicleDetails';
import AddVehicle from './components/vehicles/AddVehicle';
import VehicleData from './components/vehicles/VehicleData';

import Types from './components/vehicles/Types';
import AddType from './components/vehicles/AddType';
import UpdateType from './components/vehicles/UpdateType';

import Photos from './components/photos/Photos';
import PhotoDetails from './components/photos/PhotoDetails';
import AddPhoto from './components/photos/AddPhoto';

import Reviews from './components/reviews/Reviews';
import AddReview from './components/reviews/AddReview';
import UpdateReview from './components/reviews/UpdateReview';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "settings",
        element: <Settings />
      },


      // Vehicle Inventory
      {
        path: "inventory",
        element: <Vehicles />
      },
      {
        path: "inventory/:id",
        element: <VehicleDetails /> 
      },
      {
        path: "inventory/add-new",
        element: <AddVehicle />
      },


      // Photo Tables
      {
        path: "photos",
        element: <Photos />
      },
      {
        path: "photos/:id",
        element: <PhotoDetails />
      },
      {
        path: "photos/add-new",
        element: <AddPhoto />
      },


      // Reviews Tables
      {
        path: "reviews",
        element: <Reviews />
      },

      
      // Types Tables
      {
        path: "types",
        element: <Types />
      }
    ]
  }
])

root.render(<RouterProvider router = {router} />);