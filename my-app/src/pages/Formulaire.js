import photo from '../images/img1.jpg'
import {useState ,useEffect} from "react";
import Axios from 'axios'
import React from 'react';
import {useNavigate} from "react-router-dom";
import '../pagecss/f_styles.css'

import zxcvbn from 'zxcvbn'
import validator from 'validator'

function Formulaire () {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordStrength(zxcvbn(event.target.value).score);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validator.isEmail(newEmail));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailValid) {
      alert('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (passwordStrength < 1) {
      alert("Password is weak. Please choose a stronger password.");
      return;
    }

    try {
      await Axios.post('http://localhost:3001/adduser', {
        nom: nom,
        email: email,
        password: password,
      });
      alert('Data submitted successfully');
      window.location = '/';
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the data. Please try again later.');
    }
  };

  return ( 
    <div>
      <div className="body">
        <main>
          <form className="form">
            <h1 className="sign-in">Sign-in</h1>
            <input type="text" placeholder="Nom" name="nom" className="form--input" 
              onChange={(event) => setNom(event.target.value)} />
            <br />
            <br />
            <input type="email" placeholder="Email" className="form--input" required
              onChange={handleEmailChange} />
            {!isEmailValid && <p>Please enter a valid email address</p>}
            <br />
            <br />
            <input type="password" placeholder="Mot de passe" className="form--input"
              onChange={handlePasswordChange} />
            <br />
            <br />
            <input type="password" placeholder="Reécrit le mot de passe" className="form--input" 
              onChange={(event) => setConfirmPassword(event.target.value)} />
            <div>Password strength: {passwordStrength}/4</div>
            <button type="submit" className="form--submit" style={{ fontSize: 'x-large' }} 
              onClick={handleSubmit}>
              Sign in
            </button>
          </form>
          <img src={photo} alt="" className="photo" />
        </main>
        <div className="foot">
          <h4>Vous êtes déjà inscrit ? <a href="/pages/login">Sign in</a></h4>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
