"use client";

import Login from '@/src/Pages/Auth/Login';
import Signup from '@/src/Pages/Auth/Signup';
import Dashboard from '@/src/Pages/Dashboard';
import Home from '@/src/Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}