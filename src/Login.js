import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase'
import "./Login.css"

function Login() {
    const history = useHistory();
    const signIn = e => {
        e.preventDefault()

        //firebase log in verification
        auth.signInWithEmailAndPassword(email, password).then((auth) =>{
            history.push('/')
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        //firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
        //was a success
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="login">
        <Link to='/'>
        <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
        </Link>

        <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/> 
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/> 
                <button type='submit' className="login_signin" onClick={signIn}>Sign In</button>
            </form>
            <p> 
                By signing in you are going to gain access to my amazon fake clone 
                inspired by clever programming to learn the react framework to develope 
                websites from scratch.
            </p>

            <button onClick={register} className="login_register">Create Account</button>

        </div>


    </div>
  )
}

export default Login