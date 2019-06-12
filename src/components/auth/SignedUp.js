import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        Password: '',
        Firstname: '',
        Lastname: ''
    }

    handleSubmit = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleChange = (e) => {
        e.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3"> Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email" >E-mail</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                        <div className="input-field">
                            <label htmlFor="Password" >Password</label>
                            <input type="Password" id="Password" onChange={this.handleChange} />
                            <div className="input-field">
                                <label htmlFor="firstname" >First Name </label>
                                <input type="text" id="firstname" onChange={this.handleChange} />
                            </div>

                            <div className="input-field">
                                <label htmlFor="lastname" >Last Name </label>
                                <input type="text" id="lastname" onChange={this.handleChange} />
                            </div>
                            

                            <div className="input-field">
                                <button className="btn pink lighten-1 -depth-0">Submit </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;