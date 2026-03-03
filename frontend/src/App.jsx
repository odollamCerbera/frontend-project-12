import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SignupPage from './pages/SignupPage'

// Проверяем, есть ли токен. Если нет, то перенаправляем на страницу логина
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  return isAuthenticated ? children : <Navigate to='login' />
}

// Настраиваем маршрутизацию
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
