import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/general/App';
import ErrorPage from './components/general/ErrorPage';
import Home from './components/general/Home';
import Login from './components/general/Login';
import Register from './components/general/Register';

import Vehicles from './components/vehicles/Vehicles';
import AddVehicle from './components/vehicles/AddVehicle';
import VehicleData from './components/vehicles/VehicleData';

import Types from './components/vehicles/Types';
import AddType from './components/vehicles/AddType';
import UpdateType from './components/vehicles/UpdateType';

import Photos from './components/photos/Photos';

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
        path: "inventory",
        element: <Vehicles />
      },
      {
        path: "inventory/:id/edit",
        element: <VehicleData /> 
      },
      {
        path: "photos",
        element: <Photos />
      },
      {
        path: "reviews",
        element: <Reviews />
      },
      {
        path: "types",
        element: <Types />
      }
    ]
  }
])

root.render(<RouterProvider router = {router} />);