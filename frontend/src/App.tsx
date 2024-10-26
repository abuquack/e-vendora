import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomeScreen from './pages/HomeScreen'
import Header from './components/main-page/Header'
import LoginScreen from './pages/(logged-in)/LoginScreen'

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/login' && <Header />}
      <div className='container'>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </>
  )
}

export default App
