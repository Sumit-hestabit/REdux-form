import React from 'react'
import { connect } from 'react-redux';
import { Field, formValues, reduxForm } from 'redux-form';
import { renderField } from './renderField';


class RegisterPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            person: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                gender:'',
                techsKnown:[],
            },
            techs : ["React","Javascript","Jquery","Angular","vue"],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) =>{
        const {currentTarget:input} = e;
        let s1 = {...this.state};
        input.type === "checkbox" 
        ? input.name === "techsKnown" ? this.updatePart(input.checked,input.value,s1.person.techsKnown)
        : (s1.person[input.name] = input.checked) :
          (s1.person[input.name] = input.value);
        this.setState(s1);
        console.log("data->>>>>",s1);
     }

     updatePart = (checked,value,arr) => {
        if(checked) arr.push(value);
        else{
            let index = arr.findIndex(ele=>ele === value);
            if(index>=0) arr.splice(index,1);
        }
        return arr;
        };

     handleSubmit = async (e) => {
         e.preventDefault();
         let s1 = {...this.state};
        console.log(s1.person);
    }

    render () {
        let {firstName,lastName,email,gender,password,techsKnown} = this.state.person;
        const {techs} = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Student Registration</h2>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <Field
                            name="firstName"
                            type="text"
                            value="firstName"
                            label="First Name"
                            className="form-control"
                            component={renderField}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <Field
                            name="lastName"
                            type="text"
                            value="lastName"
                            label="Last Name"
                            className="form-control"
                            component={renderField}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <Field
                            name="email"
                            type="text"
                            value="email"
                            label="Email"
                            className="form-control"
                            component={renderField}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <Field
                            name="password"
                            type="password"
                            value="password"
                            label="Password"
                            className="form-control"
                            component={renderField}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <Field
                            name="gender"
                            type="radio"
                            value="male"
                            className="form-control"
                            checked={gender === "Male"}
                            component={renderField}
                            onChange={this.handleChange}
                        />
                         <label className="form-check-label">Male</label>
                    </div>

                    <div className="form-group">
                        <Field
                            name="gender"
                            type="radio"
                            className="form-control"
                            checked={gender === "Female"}
                            component={renderField}
                            onChange={this.handleChange}
                        />
                         <label className="form-check-label">Female</label>
                    </div>
                    {
                    techs.map(t1=>
                    <div className="form-group">
                        <input
                            name="techsKnown"
                            type="checkbox"
                            value={t1}
                            className="form-control"
                            checked={techsKnown.findIndex(tech=>tech===t1)>=0}
                            component={renderField}
                            onChange={this.handleChange}
                       />
                         <label className="form-check-label">{t1}</label>
                    </div>)
                    }
                    <button className="btn btn-primary" onClick={this.handleSubmit}>
                    Submit
                   </button>     
                </form>
            </div>
        );
    }
}

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
      if (!values.gender){
        errors.gender = 'Required to Choose any one';
    }
    if (!values.techsKnown) {
      errors.techsKnown = 'Please Select Any one.';
    }
      return errors
    }


export default reduxForm({
      form: 'simple', 
      validate, // form validation 
})(RegisterPage)

