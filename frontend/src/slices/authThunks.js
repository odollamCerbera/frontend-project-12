import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const createThunk = (path) => {
  return createAsyncThunk(
    `auth/${path}`,
    async ({ username, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post(`/api/v1/${path}`, {
          username: username.trim(),
          password: password.trim(),
        })
        return response.data
      } catch (error) {
        return rejectWithValue(error.response?.status)
      }
    }
  )
}

export const login = createThunk('login')
export const register = createThunk('signup')
