import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'

// Здесь инициализируем хранилище
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
