import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomeScreen from './pages/homeScreen'
import Header from './layouts/header/header'
import LoginScreen from './pages/(logged-in)/loginScreen'
import RegisterScreen from './pages/(logged-in)/registerScreen'

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
