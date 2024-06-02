import React, { useState } from 'react';

const InputPassword = ({ setPassword }) => {
  const [password, setPasswordState] = useState('');
  const [error, setError] = useState('');

  const constraints = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$`!%*?&])[A-Za-z\d@$`!%*?&]{8,12}$/;

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPasswordState(newPassword);

    if (!constraints.test(newPassword)) {
      setError('Password must be 8-10 characters long and include at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.');
    } else {
      setError('');
      setPassword(newPassword); // Call the prop function to set the password in the parent component
    }
  };

  return (
    <>
      <div className="mb-2">
        <label htmlFor="password" className="form-label">Password:</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password" 
          autoComplete="off" 
          value={password} 
          onChange={handlePasswordChange} 
        />
      </div>
      {error && <div className="text-danger">{error}</div>}
    </>
  );
};

export default InputPassword;