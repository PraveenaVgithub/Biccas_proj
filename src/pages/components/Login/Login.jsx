import React,{useState}from 'react'
import Backarrow from '../../../Components/backarrow/Backarrow'
import InputEmail from '../../../Components/Input_Types/email_input/InputEmail';
import InputPassword from '../../../Components/Input_Types/password_input/InputPassword';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'
import GoogleSignIn from '../../../Components/GoogleSignin/GoogleSignIn';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!email || !password) {
          // Display an error message
          alert('Please fill out all fields.');
          return;
      }

      try {
          await signInWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
          console.log( user.email  +" logged in successfully");
              
          const newEntry = {
              id: new Date().getTime().toString(),
              email,
              password,
          };

          setFormData([...formData, newEntry]);
          setIsSubmitted(true);

          if (isSubmitted) {
              alert('Login successful');
           
          }

          // Clear the form fields
          setEmail(' ');
          setPassword(' ');
      } catch (error) {
          console.log(error.message);
          alert('Login failed: ' + error.message);
      }
  };

  return (
      <>
          <Backarrow />
          <div className='d-flex justify-content-center vh-90'>
              <div className='d-flex justify-content-center m-auto w-50'>
                  <form className="m-0" onSubmit={handleSubmit}>
                      <InputEmail setEmailProp={setEmail} />
                      <InputPassword setPassword={setPassword} />
                      <button className='m-3' type="submit" style={{ alignContent: 'center', borderRadius: '10px', backgroundColor: '#54BD95', color: '#F8F8FA', border: 'none', width: '200px', padding: '5px', textAlign: 'center' }}>
                          Login
                      </button>
<GoogleSignIn/>
</form>
 
    </div>

</div>


    </>
  )
}

export default Login;