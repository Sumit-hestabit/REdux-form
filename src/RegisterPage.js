import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';

// Form validation part :

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required First Name'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required Last Name'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required Email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required password';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Choose the best colors ';
  }
  
  if (!values.gender){
    errors.gender = 'Required to Choose any one';
  }
  if (!values.techsKnown) {
  errors.techsKnown = 'Please Select Any one.';
  }
  return errors
  }

const TextInput = ({ input, label,type, meta: { touched, error, warning }}) =>
  <div><label>{label}</label>
  <div>
  <input {...input} placeholder={label} type={type} />
  {touched &&((error && <span className="error">{error} </span>) || (warning &&
  <span className="warning">{warning}</span>))}
  </div>
  </div>

// Redux Form submitting 

const Submit = async (values) => {
    let data = {
        user: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            gender: values.gender,
            checked:values.checked
        },
    }
   axios
      .post(`https://jsonplaceholder.typicode.com/users`, { data })
      .then(res => {
      console.log("response->>>>>>>",res);
      console.log("response-data->>>>>>>",res.data);
    });
}

const SimpleForm = props => { 
const { handleSubmit, pristine, reset, submitting,options } = props
// Return part of Jsx Element : 

return (
    <form onSubmit={handleSubmit((values) => Submit(values))}>
    <div className="row">
         <Field
            name="firstName"
            type="text"
            component={TextInput}
            label="First Name"
         />
      </div>

      <div className="row">
            <Field
              name="lastName"
              type="text"
              component={TextInput}
              label="Last Name"
            />
      </div>

      <div className="row">
      <Field
             name="email"
             type="email" 
             component={TextInput} 
             label="Email"
         />
      </div>

      <div className="row">
      <Field 
             name="password"
             type="password" 
             component={TextInput} 
             label="Password"
       />
      </div>

     <Field
           component={RadioGroup}
           name="gender" 
           required={true}
           options={[
           { title: 'Male', value: 'male' },
           { title: 'Female', value: 'female' }
      ]}
       />

    <div className="row">
    <label>Favorite Color</label>
    <Field
           name="favoriteColor"
           component="select">
           <option value="color">Select Favorite Color</option>
           <option value="ff0000">Red</option>
           <option value="00ff00">Green</option>
           <option value="0000ff">Blue</option>
    </Field>
    </div>
   
    <div className="form-group">
     <Field
          name="techsKnown"
        options={[
            {
                name: 'Javascript',
                id: 'one_day'
            },
            {
                name: 'Angular',
                id: 'two_day'
            },
            {
                name: 'React js',
                id: 'one_week'
            },
            {
                name: 'vue js',
                id: 'two_week'
            },
            {
                name: 'PHP',
                id: 'one_month'
            },
        ]}
        component={CheckboxGroup}
    />
      <label className="form-check-label">{options}</label>
       </div>

    <button type="submit" disabled={submitting}>Submit</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values </button>
    </form>
  )
}
export default reduxForm({
      form: 'simple', 
      validate, // form validation 
})(SimpleForm)