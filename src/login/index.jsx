// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import { toast } from 'react-toastify';


const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if(username=='' ||password =='' ){
      toast.error('Username or password is missing!', {
        position: "bottom-right"
      });
    }else{
      navigate('/dashboard');
      toast.success('Login Successful!', {
        position: "bottom-right"
      });
    }
    
  };

  return (
    <div className="login-container">
     
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      
    </div>
  );
};

export default LoginPage;
