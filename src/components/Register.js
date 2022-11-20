const Register = () => {
  // function updateUserNameState(event) {
  //   setUsername(event.target.value)
  // }

  // function updatePasswordState(event) {
  //   setPassword(event.target.value) 
  // }
  return (
    <div>
      <br />
      Registration Form
      <br />
      <form 
      // onSubmit={formSubmitHandler}
      >

        <label>
          Enter New Username:
        </label>
        <br />
        <input value={username} 
        // onChange={updateUserNameState} 
        type="text">
        </input>

        <br />
        <label>
          Enter Password:
        </label>
        <br />
        <input value={password} 
        // onChange={updatePasswordState} 
        type="password">
        </input>

        <br />
        <button type="submit">Register</button>
        <br />
        <br />

      </form>
    </div>
  )
};

export default Register;