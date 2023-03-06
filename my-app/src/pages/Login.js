import {useState ,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Axios from 'axios'
import React from 'react';
import '../pagecss/l_styles.css'


function Login (){

    const [email, setemail] = useState("");
    const [password, setpasswd] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();


    const checkuser =(event)=>{
        event.preventDefault(); 
        console.log(email);
        Axios.post('http://localhost:3001/loguser' , {
          email : email , password : password,
          }).then ((response)=>{
            navigate('/Home');
            setMessage(response.data.message);  
               
             })
             .catch((error) => {
              setMessage(error.response.data.message);
            });
    };

    return (
      <div className="login_body">
      <main>
        <form className="login_formulaire">
        <h1 className="login_sign-in">sign-up </h1>

        <input type="email" placeholder="email" className="login_form--input" required
        onChange={(event) =>{setemail(event.target.value)}}/>
        <br/>
        <br/>
        <input type="password" placeholder="mot de passe" className="login_form--input"
        onChange={(event) =>{setpasswd(event.target.value)}} />

        <button type="submit" className="login_form--submit" 
          onClick={checkuser}>
            Get sign-in
          </button>
          <h4><a href="#" style={{marginTop: "5%"}}> vous avez oublié votre mot de passe ?</a></h4>
          {message && <p style={{color:"red"}}>{message}</p>}
           </form>
      </main>
        <a href="/formulaire">sign up</a>
        <div className="login_foot">
            <h3 style={{textAlign: "center", color: "aliceblue", fontSize: "20px"}}>
        Vous n'êtes pas encore inscrit ? <a href="/pages/formulaire" style={{color: "rgb(43, 107, 226)"}}>Sign-up</a>
      </h3>
  </div>

        </div>
    )

}export default Login;