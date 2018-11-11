import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    onChange(e) {
        this.setState({ username: e.target.value })
    }

    render() {
        return (
            <div
            className="p-3 mb-2 bg-primary text-white center"
            style={{height:'100vh'}}
            >
                <div 
                    className="container"
                    className="box"
                >
                    <h2
                    className="header"
                    >
                        Username
                    </h2>
                    <form onSubmit={this.onSubmit}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Your full name"
                            onChange={this.onChange}
                        />
                        <input className="btn btn-default" type="submit" />
                        {/* <Button bsStyle="primary">Primary</Button> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default UsernameForm
