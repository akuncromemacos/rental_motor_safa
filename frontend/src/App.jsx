import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    // Pastikan backend server.js kamu sedang berjalan di port 5000
    axios.get('http://localhost:5000/api/test')
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage('Gagal terhubung ke backend'))
  }, [])

  return (
    <div className="app-container">
      <h1 className="title">Frontend React Aktif!</h1>
      <div className="status-box">
        Status Backend: {message}
      </div>
    </div>
  )
}

export default App