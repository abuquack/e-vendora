import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomeScreen from './pages/HomeScreen'
import Header from './layouts/Header/Header'
import LoginScreen from './pages/(logged-in)/LoginScreen'
import RegisterScreen from './pages/(logged-in)/RegisterScreen'

function App() {
  const location = useLocation();
  return (
    <>
      {(location.pathname !== "/login" && location.pathname !== "/register") && <Header />}
      <div className='container'>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </div>
    </>
  )
}

export default App
