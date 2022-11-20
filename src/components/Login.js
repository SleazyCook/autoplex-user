import { Link } from 'react-router-dom';

const Login = () => {
  // function updateUserNameState(event) {
  //   setUsername(event.target.value)
  // }

  // function updatePasswordState(event) {
  //   setPassword(event.target.value) 
  // }
  return (
    <div>
      <br />
      Login Form
      <br />
      <form 
      // onSubmit={formSubmitHandler}
      >

        <label>
          Enter Username:
        </label>
        <br />
        <input 
        // value={username} 
        // onChange={updateUserNameState} 
        type="text">
        </input>

        <br />
        <label>
          Enter Password:
        </label>
        <br />
        <input 
        // value={password} 
        // onChange={updatePasswordState} 
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