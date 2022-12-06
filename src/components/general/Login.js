import { useState } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {profileObj: [profileData, setProfileData]} = useOutletContext();
  const {loggedInObj: [loggedIn, setLoggedIn]} = useOutletContext();
  const navigate = useNavigate();

  async function loginFormSubmitHandler(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://autoplex-webservice.onrender.com/api/users/login',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        }
      )
      const data = await response.json();
      console.log("login data:", data);
      if (data.user) {
        setLoggedIn(true);
        localStorage.setItem("token", data.token);
        navigate('/inventory')
      }
    } catch (error) {
      console.log(error);
    }
  };

  // async function fetchUserInfo() {    
  //   try {
  //     const response = await fetch(
  //       'https://autoplex-webservice.onrender.com/api/vehicles/users/me',
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             "Authorization": `Bearer ${localStorage.getItem("token")}`
  //           },
  //         })
          
  //     const data = await response.json();
  //     console.log("user data: ", data);
  //     setProfileData(data);
  //     navigate('/');
  //   } catch(error) {
  //     console.log(error);
  //   }
  // };
  
  function updateUserNameState(event) {
    setUsername(event.target.value)
  }

  function updatePasswordState(event) {
    setPassword(event.target.value) 
  }
  return (
    <div>
      <br />
      Login Form
      <br />
      <form 
      onSubmit={loginFormSubmitHandler}
      >

        <label>
          Enter Username:
        </label>
        <br />
        <input 
        value={username} 
        onChange={updateUserNameState} 
        type="text">
        </input>

        <br />
        <label>
          Enter Password:
        </label>
        <br />
        <input 
        value={password} 
        onChange={updatePasswordState} 
        type="password">
        </input>

        <br />
        <button type="submit">Login</button>
        <br />

        <br />
        <Link to="/register">Register Here</Link>
        <br />
        <br />

      </form>
    </div>
  )
};

export default Login;