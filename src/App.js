import React , {useState} from 'react';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';

function App(props) {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const {handleSubmit,Submitting} = props;

    return(
        <div className="App">
            <center><h1>Registration Form</h1></center>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                      <Field type="text" name="username" value={username} component="input" label="Enter UserName" onChange={(e)=>setUserName(e.target.value)}/>
                        </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                      <Field type="text" name="email" value={email} component="input" label="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                      <Field type="number" name="phone" value={phone} component="input" label="Enter Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                      <Field type="text" name="address" value={address} component="input" label="Enter Address" setAddress={(e)=>setAddress(e.target.value)}/>
                        </div>
                </div>
                <button type="button" disabled ={Submitting}>Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        submmit:(username,email,phone,address) => { 
            dispatch({type:'SUBMIT',
            payload:{firstName:username,
             }}) }
    }
}
export default App;