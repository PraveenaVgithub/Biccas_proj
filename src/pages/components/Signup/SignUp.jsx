import React,{useState} from 'react'
import Backarrow from '../../../Components/backarrow/Backarrow';
import InputUserName from '../../../Components/Input_Types/name_input/InputUserName';
import InputEmail from '../../../Components/Input_Types/email_input/InputEmail';
import InputPassword from '../../../Components/Input_Types/password_input/InputPassword';
import InputConfirmPassword from '../../../Components/Input_Types/password_input/InputConfirmPasword';
import GoogleSignIn from '../../../Components/GoogleSignin/GoogleSignIn';
import {createUserWithEmailAndPassword } from "firebase/auth";
import{auth} from '../firebase'
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!username || !email || !password || !confirmPassword) {
          // Display an error message 
          alert('Please fill out all fields.');
          return;
      }

      if (password !== confirmPassword) {
          // Display an error message 
          alert('Passwords do not match.');
          return;
      }

      try {
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
          console.log(user);
        
          const newEntry = {
              id: new Date().getTime().toString(),
              username,
              email,
              password,
              confirmPassword
          };

          setFormData([...formData, newEntry]);
          setIsSubmitted(true);

          if (isSubmitted) {
              alert('Submission successful');
          }

          // Clear the form fields
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
      } catch (error) {
          console.log(error.message);
      }
  };

  return (
      <>
          <Backarrow />
          <div className='d-flex justify-content-center vh-80'>
              <div className='d-flex justify-content-center m-auto w-50'>
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