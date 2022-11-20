import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      Delavega Interface
      <br />
      <Navbar />
      <br />
      <Outlet context />
      <br />

    </div>
  )
}

export default App;