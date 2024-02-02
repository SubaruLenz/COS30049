import React, { useState } from 'react';
import './form.css';
import { Login } from './login.jsx';
import { Register } from './register.jsx';

function Form() {
  const [currentForm, setCurrentForm] = useState("log in");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div classname="form">
      {
        currentForm =="log in " ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}
export default Form;