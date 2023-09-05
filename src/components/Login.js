import React from 'react';
import './Login.css'; // Import your CSS file
import { Link} from 'react-router-dom'


const Login = () => {
  return (
      
    
    <div className="login-container">
    <div className="background-svg">
       
      </div>
      <div className="login-box">
        
        <h2>Login</h2>
        <form>
        
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <Link className=" link" to="/forgotpassword">  <p>Forgot Password</p></Link>
          <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
    
  </div>
 
          
          <Link className=" link" to="/adminpage">  <button type="submit">Login</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
