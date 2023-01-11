import React from 'react'
import '../css/Login.css'

export default function Login() {
    return (
        <div className='main'>
            <form action="/" className="form2" id="form-2">
                <h3 className="heading">Login form</h3>

                <div className="spacer"></div>

                <div className="form-group">
                    <label for="email" className="form-label">Email</label>
                    <input id="email" name="email" type="text" placeholder="VD: tmphi9903@gmail.com" className="form-control" required />
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <label for="password" className="form-label">Password</label>
                    <input id="password" name="password" type="password" className="form-control" required />
                    <span className="form-message"></span>
                </div>

                <button className="form-submit">Login</button>
            </form>
        </div>


    )
}
