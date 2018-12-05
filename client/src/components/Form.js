import React, { Component } from 'react'
import { Grid, Form } from 'semantic-ui-react'

class FormExampleCaptureValues extends Component {
    state = { name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state

        this.setState({ submittedName: name, submittedEmail: email })
    }

    render() {
        const { name, email, submittedName, submittedEmail } = this.state

        return (
        <div>
            <Grid> 
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Form onSubmit={this.handleSubmit}>    
                        <Form.Group>
                            <h1>Naughty List </h1>
                            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                            <Form.Input
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            />
                            <Form.Button content='Submit' />
                        </Form.Group>
                            <strong>onChange:</strong>
                            <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
                            <strong>onSubmit:</strong>
                            <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
                        </Form>
                    </Grid.Column>
                    {/* fix the submit on the second form to handle a diffferent */}
                    <Grid.Column width={8}>
                        <Form onSubmit={this.handleSubmit}>    
                        <Form.Group>
                            <h1>Nice List </h1>
                            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                            <Form.Input
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            />
                            <Form.Button content='Submit' />
                        </Form.Group>
                            <strong>onChange:</strong>
                            <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
                            <strong>onSubmit:</strong>
                            <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
                        </Form>
                    </Grid.Column>
                </Grid.Row> 
            </Grid> 
        </div> 
        
        )
    }
}

export default FormExampleCaptureValues