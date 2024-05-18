import './App.css';
import Home  from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from './Components/Header/Header';
import ChangePassword from './Components/ChangePassword/ChangePassword';


function Logout() {
  localStorage.clear();
  return (
    < Navigate to="/login" />
  );
}

function RegisterAndLogout() {
  localStorage.clear();
  return (
    <Register/>
  );
} 


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<RegisterAndLogout />} />
          <Route path='/logout' element={<Logout />}/>
          <Route path='/change/password/' element={
            <ProtectedRoute>
              <ChangePassword/>
            </ProtectedRoute>
            }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
