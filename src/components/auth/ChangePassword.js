import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

import { Form, Button, Card } from 'react-bootstrap'

class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onChangePassword = (event) => {
  event.preventDefault()

  const { msgAlert, history, user } = this.props

  changePassword(this.state, user)
    .then(() =>
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/'))
    .catch((error) => {
      this.setState({ oldPassword: '', newPassword: '' })
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { oldPassword, newPassword } = this.state

  return (
    <Card style={{ width: '40rem' }} className="shadow p-3 mb-5 bg-white rounded mx-auto" >
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Change Password</h3>
          <Form onSubmit={this.onChangePassword}>
            <Form.Group controlId='oldPassword'>
              <Form.Label>Old password</Form.Label>
              <Form.Control
                required
                name='oldPassword'
                value={oldPassword}
                type='password'
                placeholder='Old Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='newPassword'>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                name='newPassword'
                value={newPassword}
                type='password'
                placeholder='New Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
          </Form>
        </div>
      </div>
    </Card>
  )
}
}

export default withRouter(ChangePassword)
