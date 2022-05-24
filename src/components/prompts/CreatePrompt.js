import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import PromptForm from './PromptForm'
import { createPrompt } from '../../api/prompts'
import { promptCreateSuccess, promptCreateFailure } from '../AutoDismissAlert/messages'

class CreatePrompt extends Component {
  constructor (props) {
    super(props)
    console.log('props', props)
    // console.log(props.match.params.id)

    this.state = {
      name: '',
      prompt: ''
    //   created: false
    }
  }

   handleChange = (event) => {
     //  console.log('name: ' + event.target.name)
     //  console.log('value: ' + event.target.value)
     this.setState({ [event.target.name]: event.target.value })
   }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('event', event)
    const { user, msgAlert, history } = this.props
    console.log(history)
    createPrompt(this.state, user)
      .then(res => history.push('/prompts/' + res.data.prompt._id))
      .then(() =>
        msgAlert({
          heading: 'Prompt Successfully Created',
          message: promptCreateSuccess,
          variant: 'success'
        }))
      .catch((error) => {
        msgAlert({
          heading: 'Failed creating your prompt: ' + error.message,
          message: promptCreateFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    if (this.state.created) {
      return <Redirect to={'prompts/'} />
    }
    return (
      <>
        <h4>Create a Prompt</h4>

        <PromptForm
          name={this.state.name}
          prompt={this.state.prompt}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}/>

      </>
    )
  }
}
export default withRouter(CreatePrompt)
