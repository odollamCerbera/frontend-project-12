import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
// import channelsReducer from './channelsSlice.js'
// import messagesReducer from './messagesSlice.js'

// Здесь инициализируем хранилище, reducer будут добавляться (для каналов и для сообщений) + мидлвары для вебсокетов

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // channels: channelsReducer,
    // messages: messagesReducer,
  },
})
