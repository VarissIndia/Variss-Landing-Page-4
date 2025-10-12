import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { GoogleOAuthProvider } from "@react-oauth/google";
import './App.css'

function App() {
    const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;


  return (
    <Router>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="inset-0 bg-gradient-to-br from-[#f9fbfb] to-[#bfd0ec]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      </GoogleOAuthProvider>
    </Router>
  )
}

export default App