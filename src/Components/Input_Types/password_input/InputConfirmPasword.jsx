import React, { useState } from 'react';

const InputConfirmPassword = ({ password, setConfirmPassword }) => {
  const [confirmPassword, setConfirmPasswordState] = useState('');
  const [error, setError] = useState('');

  const handleConfirmPasswordChange = (e) => {
    const newPassword = e.target.value;
    setConfirmPasswordState(newPassword);

    if (newPassword !== password) {
      setError('Passwords do not match.');
    } else {
      setError('');
      setConfirmPassword(newPassword); // Call the prop function to set the confirm password in the parent component
    }
  };

  return (
    <div className="mb-2">
      <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
      <input 
        type="password" 
        className="form-control" 
        id="confirmPassword" 
        name="confirmPassword" 
        autoComplete="off" 
        value={confirmPassword} 
        onChange={handleConfirmPasswordChange} 
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default InputConfirmPassword;