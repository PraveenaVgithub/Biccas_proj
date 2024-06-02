import React,{useState} from 'react'

const InputEmail = ({ setEmailProp}) => {

   const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailProp(e.target.value);
        
      };

  return (
      <>
  <div className="mb-2">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" name="email" autoComplete="off" value={email} onChange={handleEmailChange} />
  </div>
      </>
  )
}

export default InputEmail;