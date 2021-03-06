import React,{Component} from 'react'

class SignIn extends Component {
    state = {
       email : '',
       Password : ''

    }

    handleSubmit =(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleChange=(e)=>{
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
                                <button className="btn pink lighten-1 -depth-0">Submit </button>
            </div>
                            </div>
                        </div>
            </form>
        </div>
                )
            }
}

export default SignIn;