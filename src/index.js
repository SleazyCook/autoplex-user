import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import Vehicles from './components/Vehicles';
import AddVehicle from './components/AddVehicle';
import VehicleData from './components/VehicleData';

import Photos from './components/Photos';

import Types from './components/Types';
import AddType from './components/AddType';
import UpdateType from './components/UpdateType';

import Reviews from './components/Reviews';
import AddReview from './components/AddReview';
import UpdateReview from './components/UpdateReview';

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