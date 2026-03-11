import { createSlice } from '@reduxjs/toolkit'
import { fetchMessages, sendMessage } from '@thunks/messageThunk'
import { removeChannel } from '@thunks/channelThunk'
import { removeChannel as removeChannelAction } from './channelsSlice'

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    entities: [],
    loading: 'idle',
    error: null,
    sending: false,
    sendError: null,
  },
  reducers: {
    addMessage(state, action) {
      state.entities.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = 'pending'
        state.error = null
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.entities = action.payload
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload
      })
      .addCase(sendMessage.pending, (state) => {
        state.sending = true
        state.sendError = null
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.sending = false
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.sending = false
        state.sendError = action.payload
      })
      .addCase(removeChannel.fulfilled, (state, action) => {
        const channelId = action.payload
        state.entities = state.entities.filter(msg => msg.channelId !== channelId)
      })
  },
})

export const { addMessage } = messagesSlice.actions

export default messagesSlice.reducer
