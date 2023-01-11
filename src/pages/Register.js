import React from 'react'
import '../css/Register.css';
export default function Register() {
    // XỬ lý validate bằng JavaScript



    // Form Register

    return (
        <div className="main">

            <form action="/login" className="form" id="form-1">
                <h3 className="heading">Register form</h3>


                <div className="spacer"></div>
        
                <div className="form-group">
                    <label for="fullname" className="form-label">Full name</label>
                    <input id="fullname" name="fullname" type="text" placeholder="Truong Minh Phi" className="form-control" required/>
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <label for="email" className="form-label">Email</label>
                    <input id="email" name="email" type="text" placeholder="tmphi9903@gmail.com" className="form-control" required />
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <label for="password" className="form-label">Password</label>
                    <input id="password" name="password" type="password" className="form-control" required/>
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <label for="password_confirmation" className="form-label">Confirm password</label>
                    <input id="password_confirmation" name="password_confirmation" type="password" className="form-control" required/>
                    <span className="form-message"></span>
                </div>

                <button className="form-submit">Register</button>
            </form>
        </div>
    )
}
