import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/home';
import Registration from './components/Registration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Registration />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
