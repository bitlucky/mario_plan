import React, { Component } from 'react'

class CreateProject extends Component {
    state = {

        title: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3"> Create Project</h5>
                    
                    <div className="input-field">
                        <label htmlFor="title" >Title </label>
                        <input type="text" id="title" onChange={this.handleChange} />
                        
                        <div className="input-field">
                            <label htmlFor="description" >Description</label>
                            <input type="text" id="description" onChange={this.handleChange} />
                           
                            <div className="input-field">
                                <label htmlFor="Author" > Author  </label>
                                <input type="text" id="Author" onChange={this.handleChange} />
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

export default CreateProject;