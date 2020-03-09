import React from 'react';

export default class Login extends React.Component {
    render(){
        return(
            <div className="login-overlay">
                <div>
                    <h3 style={{backgroundColor: 'white', width: '200px', marginLeft: '10px'}}><a href="#">&#9855; Better accessibility</a></h3>
                </div>
                <div className="login-container">
                    <form onSubmit={this.handleSubmit}>
                        <label></label>
                        <input placeholder="email" id="input-login"></input>
                        <br />
                        <label></label>
                        <input placeholder="password" id="input-login"></input>
                        <br />
                        <button id="submit-login-button">Submit</button>
                        <p><a href="#" style={{textDecoration: 'none', color: 'white', fontSize: '13px' }}>Forgot Password?</a></p>
                        <p><a href="#" style={{textDecoration: 'none', color: 'white', fontSize: '13px' }}>Don't have an account?</a></p>
                    </form>
                </div>
            </div>
        )
    }
}