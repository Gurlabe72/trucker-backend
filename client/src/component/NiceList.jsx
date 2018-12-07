import React, { Component } from 'react'
import { Segment, Form, Input, Button } from 'semantic-ui-react'

class NiceList extends Component {
    state = { name: '', email: '', submittedName: '', submittedEmail: '',  count:0 }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state

        this.setState({ submittedName: name, submittedEmail: email  })
    }
    render() {
        const posCount = () => {
            let count = this.state.count;
            this.setState({ count:count + 1 })
        }
        const negCount = () => {
            let count = this.state.count;
            this.setState({ count:count - 1 })
        }
        const { name, email, submittedName, submittedEmail} = this.state
        return (
        <Segment>
                        <Form onSubmit={this.handleSubmit}>    
                            <h1>Nice List </h1>
                            <Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                            <Input
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={this.handleChange}
                            />
                            <Button content='Submit' />
                            <Button.Group>
                                <Button onClick={negCount}>-</Button>
                                    <Button.Or text={this.state.count} />
                                <Button positive onClick={posCount}>+</Button>
                            </Button.Group>
                            <strong>onChange:</strong>
                            <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
                            <strong>onSubmit:</strong>
                            <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
                        </Form>
        </Segment>
        
        )
    }
}

export default NiceList