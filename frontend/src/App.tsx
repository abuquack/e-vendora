import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomeScreen from './pages/home-screen'
import Header from './layouts/header/header'
import LoginScreen from './pages/(logged-in)/login-screen'
import RegisterScreen from './pages/(logged-in)/register-screen'
import NotFoundPage from './pages/not-found-screen'

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
