import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.js'

// Здесь инициализируем хранилище
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
