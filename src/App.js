import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't be include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email", // for password
      placeholder: "email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password don't match!",
      required: true,
      pattern: values.password
    }
  ]

  const onChangeHandler = (e) => {
     setValues({...values, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
      e.preventDefault();
      console.log(values)
  }


  

  return (
    <div className="App">
       <form>
         <h2>Register</h2>
          {inputs.map((input) => (
            <FormInput 
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChangeHandler}
            />
          ))}
          <button onClick={submitHandler}>Submit</button>
       </form>
    </div>
  );
}

export default App;
