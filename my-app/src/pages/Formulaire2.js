import photo from '../images/img1.jpg'
import {useState ,useEffect} from "react";
import Axios from 'axios'
import React from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/f_styles.css'


import validator from 'validator';

import zxcvbn from 'zxcvbn';

function Formulaire (){
  const navigate = useNavigate();

    const [nom, setnom] = useState("");
    const [email, setemail] = useState("");
    const [password, setpasswd] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handlePasswordChange = (event) => {
        setpasswd(event.target.value);
        setPasswordStrength(zxcvbn(event.target.value).score);
      }
    
      const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setemail(newEmail);
        setIsEmailValid(validator.isEmail(newEmail));
      }

      const adduser =(event)=>
      {
        event.preventDefault(); 
        if (!isEmailValid) {
          alert('Please enter a valid email address');
          return;
        }
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        if (passwordStrength < 0) {
          alert("Password is weak. Please choose a stronger password.");
          return;
        }
        Axios.post('http://localhost:3001/adduser' , {
          nom : nom , email : email , password : password,
        }).then (()=>{
          navigate('/Home');  
          console.log('datasubmitted')
        })
          
      };
    
    return( 
   <div>
 <div className="sign-up_body">
      <main className='sign-up_main'>
        <form className="sign-up_form">
          <h1 className="sign-up_sign-in">sign-in </h1>
          <input type="text" placeholder="nom" name="nom" className="sign-up_form--input" 
          onChange={(event) =>{setnom(event.target.value)}}/>
          <br />
          <br />
          <input type="email" placeholder="email" className="sign-up_form--input" required
          onChange={handleEmailChange}  />
          {!isEmailValid && <p>Please enter a valid email address</p>}
          <br />
          <br />
          <input type="password" placeholder="mot de passe" className="sign-up_form--input"
          onChange={handlePasswordChange}/>
          <br />
          <br />
          <input type="password" placeholder="reécrit le mot de passe" className="sign-up_form--input" 
            onChange={(event) => setConfirmPassword(event.target.value)} />
            <div>Password strength: {passwordStrength}/4</div>


          <button type="submit" className="sign-up_form--submit" style={{ fontSize: 'x-large' }} 
          onClick={adduser}>
            Get sign-in
          </button>
        </form>

        <img src={photo} alt="" className="sign-up_photo" />
      </main>

      <div className="sign-up_foot">
        <h4>
          {' '}
          vous êtes déja inscrit ? <a href="/"> sign-in</a>
        </h4>
      </div>
    </div>
  
   </div>


    )
}

export default Formulaire;