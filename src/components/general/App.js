import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [ profileData, setProfileData ] = useState({});
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ vehicleData, setVehicleData ] = useState([]);

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
  }, []);

  return (
    <div>
      Delavega Interface
      <br />
      <Navbar />
      <br />
      <Outlet context ={{
        vehicleObj: [vehicleData, setVehicleData],
        profileObj: [profileData, setProfileData],
        loggedInObj: [loggedIn, setLoggedIn]
      }} />
      <br />

    </div>
  )
}

export default App;