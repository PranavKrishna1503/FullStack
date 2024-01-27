import React from 'react'
import Textfields from '../components/textfields'
import Buttons from '../components/buttons'
import '../assets/css/login.css'
import email_img from '../assets/images/email.png'
import user_img from '../assets/images/person.png'
import password_img from '../assets/images/password.png'


const Login = () => {
    return (
          <div className='container'>
            <div className='header'>
              <div className='text'>Sign Up</div>
              <div className='underline'></div>
          </div>
          <div className='inputs'> 

          <div className='input'>
            <img src={user_img} alt="" />
            <input type="text" placeholder='Name'/>
          </div>
          <div className='input'>
            <img src={email_img} alt="" />
            <input type="email" placeholder='Email'/>
          </div>
          <div className='input'>
            <img src={password_img} alt="" />
            <input type="password" placeholder='Password'/>
          </div>
          </div>

          <div className='forget-password'>Lost Password? <span>Click Here!</span></div>
          <div className='submit-container'>
            <div className='submit'>Sign up</div>
            <div className='submit'>Login</div>
          </div>
        </div>
    );
  };
  
  export default Login;
  
  
  
  
  
  {/* <div>
  UserName: <Textfields id='username' type='text' name='username'/><br/>
  </div>
  <p>
   Password: 
  </p>
  <div>
  <InputGroup inside style={styles}>
  <Input type={visible ? 'text' : 'password'} />
  <InputGroup.Button onClick={handleChange}>
  {visible ? <EyeIcon /> : <EyeSlashIcon />}
  </InputGroup.Button>
  </InputGroup>
  </div>
  <br></br>
  <div>
  <Buttons name="Login"/><br/>
  </div>
  <br></br>
  <div>
  <Buttons name="Signup"/><br/>
  </div> */}