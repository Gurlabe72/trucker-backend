import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
        <div>
            <h1>Hi this is the Dashboard {this.props.match.params.color} </h1>
        </div>
        )
    }
}
