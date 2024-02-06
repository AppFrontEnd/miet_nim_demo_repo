import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Form from "./login";
import Dashboard from './dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <Router>
      <ToastContainer autoClose={5000}/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/old-path" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
