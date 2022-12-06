import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';

const Settings = () => {
  const {profileObj: [profileData, setProfileData]} = useOutletContext();
  const {loggedInObj: [loggedIn, setLoggedIn]} = useOutletContext();
  const [lightMode, setLightMode] = useState(false);
  const navigate = useNavigate();
  
  function logOutUser() {
    console.log('logging out');
    localStorage.removeItem('token');
    setLoggedIn(false);
    setProfileData({});
    navigate('/');
  }

  function handleLightModeToggle(event) {
    // console.log("light mode toggled")
    setLightMode(event.target.checked);
    var element = document.body;
    element.classList.toggle('light-mode');
}

  console.log(loggedIn)

  return (
    <div>
      <p onClick={logOutUser}>Logout</p>

      {
        !loggedIn ?
          <div>
            bitch who are you?
          </div>
        :
          <div className='vert-flex-container'>
            <h2>Settings</h2>

            <div className="setting-container">

              <BsMoon />
              <h3>Dark Mode</h3>

              <label className="switch">
                  <input type="checkbox" defaultChecked={lightMode} value={lightMode} onChange={(event) => handleLightModeToggle(event)}></input>
                  <span className="slider round"></span>
              </label>

              <BsSun />
              <h3>Light Mode</h3>

            </div>

              
          </div>
        }
    </div>
  )
}

export default Settings;