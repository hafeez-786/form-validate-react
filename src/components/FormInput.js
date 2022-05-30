import React, { useState } from 'react'
import './inputForm.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
      setFocused(true);
  }

  return (
    <div className='form-input'>
        <label>{label}</label>
        <input 
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput