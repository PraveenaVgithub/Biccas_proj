import React,{useState}from 'react'
import Backarrow from '../../../Components/backarrow/Backarrow'
import InputEmail from '../../../Components/Input_Types/email_input/InputEmail';
import InputPassword from '../../../Components/Input_Types/password_input/InputPassword';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState([]);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if ( !email || !password ) {
      // Display an error message 
      alert('Please fill out all fields.');
      return;
    }
    
    const newEntry = {
      id: new Date().getTime().toString(),
      email,
      password,
    };
  console.log(email); console.log(password);
    setFormData([...formData, newEntry]);
  // setIsSubmitted(true);  
 
  alert('submition success');
  setEmail('');
  setPassword('');
 
   
  };
  return (
    <>
    <Backarrow/>
    <div className=' d-flex justify-content-center vh-90 '>
     <div className=' d-flex justify-content-center  m-auto w-50 '>
      
     <form className=" m-0" onSubmit={handleSubmit} >
     <InputEmail setEmailProp={setEmail}/>
  <InputPassword setPassword={setPassword} />
     <button type="submit" style={{ marginTop: '7px',borderRadius: '10px',  backgroundColor: '#54BD95', color: '#F8F8FA', border: 'none' ,width: '210px' ,padding:'5px',textAlign : 'center'}}>
  Login
  </button>
</form>
    </div>

</div>


    </>
  )
}

export default Login;