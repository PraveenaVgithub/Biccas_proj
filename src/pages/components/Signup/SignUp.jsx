import React, { useState } from 'react';
import Backarrow from '../../../Components/backarrow/Backarrow';
import InputUserName from '../../../Components/Input_Types/name_input/InputUserName';
import InputEmail from '../../../Components/Input_Types/email_input/InputEmail';
import InputPassword from '../../../Components/Input_Types/password_input/InputPassword';
import InputConfirmPassword from '../../../Components/Input_Types/password_input/InputConfirmPasword';
import GoogleSignIn from '../../../Components/GoogleSignin/GoogleSignIn';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const validateInput = () => {
      if (!username ||!email ||!password ||!confirmPassword) {
        alert('Please fill out all fields.');
        return false;
      }
      if (password!== confirmPassword) {
        alert('Passwords do not match.');
        return false;
      }
      return true;
    };
  
    const handleApiError = (error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email address already in use. Please try a different email address.');
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email address.');
      } else {
        console.error(error);
        alert('An error occurred. Please try again later.');
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateInput()) return;
  
      try {
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          });
      } catch (error) {
        handleApiError(error);
      }
    };
  
    return (
      <>
        <Backarrow />
        <div className="d-flex justify-content-center vh-80">
          <div className="d-flex justify-content-center m-auto w-50">
            <form className="m-0" onSubmit={handleSubmit}>
              <InputUserName setUsername={setUsername} />
              <InputEmail setEmailProp={setEmail} />
              <InputPassword setPassword={setPassword} />
              <InputConfirmPassword password={password} setConfirmPassword={setConfirmPassword} />
              <button type="submit" style={{ marginTop: '7px', borderRadius: '10px', backgroundColor: '#54BD95', color: '#F8F8FA', border: 'none', width: '210px', padding: '5px', textAlign: 'center' }}>
                Sign Up
              </button>
              <GoogleSignIn />
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default SignUp;