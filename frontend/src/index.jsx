import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import init from './init.jsx'

const run = async () => {
  const app = await init()
  createRoot(document.getElementById('root')).render(
    <StrictMode>{app}</StrictMode>,
  )
}

run()
