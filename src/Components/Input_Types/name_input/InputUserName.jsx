import React,{useState} from 'react'

const InputUserName = ({ setUsername}) => {
    const [username, setLocalUsername] = useState('');  //for taking input val
    const[error,setError]=useState(false)
    const handleUsernameChange = (e) => {
     
        setLocalUsername(e.target.value);
        setUsername(e.target.value);
        
        (username === '') ? (setError(true) ): (setError(false));
         if (username.length <=2 || username.length > 20) {
          setError(true);
        } else {
          setError(false);
        }
        
      };

  return (
    <>
 <div className="mb-2">
    <label htmlFor="username" className="form-label" >Username:</label>
    <input type="text" className="form-control" id="username" name="username" autoComplete="off" value={username} onChange={handleUsernameChange} 
      />
  </div>
       {error && <span style={{ color: 'red' }}>Username must be between 3 and 20 characters</span>}
  


    </>
  )
}

export default InputUserName