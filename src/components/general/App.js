import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import '../index.css';

const App = () => {
  const [ profileData, setProfileData ] = useState({});
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ vehicleData, setVehicleData ] = useState([]);
  const [ photoData, setPhotoData ] = useState([]);
  const [ reviewData, setReviewData ] = useState([]);

  // console.log(vehicleData)

  useEffect(() => {
    async function fetchVehicleData() {
      try {
        const response = await fetch(
          'https://autoplex-webservice.onrender.com/api/vehicles',
          {
            headers: {
              "Content-Type": "application/json"
            }
          })

          const vData = await response.json();
          setVehicleData(vData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVehicleData();

    async function fetchPhotoData() {
      try {
        const response = await fetch(
          'https://autoplex-webservice.onrender.com/api/photos',
          {
            headers: {
              "Content-Type": "application/json"
            }
          })


          // console.log(response)
          const pData = await response.json();
          // console.log(pData)
          setPhotoData(pData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPhotoData();

    async function fetchReviewData() {
      try {
        const response = await fetch(
          'https://autoplex-webservice.onrender.com/api/reviews',
          {
            headers: {
              "Content-Type": "application/json"
            }
          })

          const rData = await response.json();
          setReviewData(rData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviewData();
    
  }, []);

  return (
    <div>
      Delavega Interface
      <br />
      <Navbar />
      <br />
      <Outlet context ={{
        profileObj: [profileData, setProfileData],
        loggedInObj: [loggedIn, setLoggedIn],
        vehicleObj: [vehicleData, setVehicleData],
        photoObj: [photoData, setPhotoData],
        reviewObj: [reviewData, setReviewData]
      }} />
      <br />

    </div>
  )
}

export default App;