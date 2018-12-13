import React, { Component } from 'react'
import { Segment, Form, Input, Button } from 'semantic-ui-react'

class NaughtyList extends Component {
    state = { name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state

        this.setState({ submittedName: name, submittedEmail: email })
    }

    render() {
    const { name, email, submittedName, submittedEmail } = this.state

    return (

            <Segment>
                <Form onSubmit={this.handleSubmit}>    
                    <h1>Naughty List </h1>
                    <Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                    <Input
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                    />
                    <Button content='Submit' />

                    <strong>onChange:</strong>
                    <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
                    <strong>onSubmit:</strong>
                    <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
                </Form>
        </Segment>

        )
    }
}

export default NaughtyList