import React,{useState} from 'react'
import Backarrow from '../../../Components/backarrow/Backarrow';
import InputUserName from '../../../Components/Input_Types/name_input/InputUserName';
import InputEmail from '../../../Components/Input_Types/email_input/InputEmail';
import InputPassword from '../../../Components/Input_Types/password_input/InputPassword';
import InputConfirmPassword from '../../../Components/Input_Types/password_input/InputConfirmPasword';
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
   
    // const handleUsernameChange = (e) => {
    //   setUsername(e.target.value);
    // };
  
    // const handleEmailChange = (e) => {
    //   setEmail(e.target.value);
    // };
  
    // const handlePasswordChange = (e) => {
    //   setPassword(e.target.value);
    // };
  
    // const handleConfirmPasswordChange = (e) => {
    //   setConfirmPassword(e.target.value);
    // };
    const [formData, setFormData] = useState([]);
    //   const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if ( !username || !email || !password || !confirmPassword) {
          // Display an error message 
          alert('Please fill out all fields.');
          return;
        }
        setIsSubmitted(true); 
        const newEntry = {
          id: new Date().getTime().toString(),
          username,
          email,
          password,
          confirmPassword
        };
      console.log(email); console.log(username);console.log(password);
        setFormData([...formData, newEntry]);
      
        if(isSubmitted){alert('submition success')};
        setConfirmPassword('');
        setEmail(' ');
        setPassword('');
        setUsername('');
      };

  return (
    <>
    <Backarrow/>
     <div className=' d-flex justify-content-center vh-80 '>
     <div className=' d-flex justify-content-center  m-auto w-50 '>
      
     <form className=" m-0" onSubmit={handleSubmit} >
 
  <InputUserName  setUsername={setUsername} />
  <InputEmail setEmailProp={setEmail}/>
  <InputPassword setPassword={setPassword} />
  <InputConfirmPassword password={password} setConfirmPassword={setConfirmPassword} />

  <button type="submit" style={{ marginTop: '7px',borderRadius: '10px',  backgroundColor: '#54BD95', color: '#F8F8FA', border: 'none' ,width: '210px' ,padding:'5px',textAlign : 'center'}}>
  Sign Up
  </button>
</form>

      
    </div>

     </div>




    </>
  )
}

export default SignUp;