import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        console.log(this.props);

        return (
        <div>
            <h1>Navbar</h1>
        </div>
        )
    }
}

export default withRouter (connect(Navbar));