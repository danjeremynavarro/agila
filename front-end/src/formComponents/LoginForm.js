import {Container, Typography, Box} from '@material-ui/core';
import { useState } from 'react';

export default function LoginForm(){
    const [form, setState] = useState({
        data : {
            'user': 'u',
            'password':'p'
        }
    });

    return (
        <div className="container Login ">
            <div className="row m-1">
                <div className="text-center">
                    <h3>
                        Login Form
                    </h3>
                </div>
            </div>           
            <div className="row">
               <form>
                   <div className="form-outline m-2">                       
                       <input type="text" id="form1" className="form-control" />
                       <label className="form-label" for="form1">Username/Email</label>
                   </div>
                   <div className="form-outline m-2">                       
                       <input type="text" id="form2" className="form-control" />
                       <label className="form-label" for="form1">Password</label>
                   </div>
                   <div className="form-outline m-2">
                       <button className="btn btn-primary" onClick={()=>{alert("Login!")}}>Login</button>
                   </div>
                </form>
            </div>
        </div>
    )
}