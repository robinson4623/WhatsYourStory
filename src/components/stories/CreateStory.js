import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import StoryForm from './StoryForm'
import { createStory } from '../../api/stories'
import { storyCreateSuccess, storyCreateFailure } from '../AutoDismissAlert/messages'

class CreateStory extends Component {
  constructor (props) {
    super(props)
    console.log('props', props)
    // console.log(props.match.params.id)

    this.state = {
      title: '',
      story: ''
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

    createStory(this.state, user)
      .then(res => history.push('/stories/' + res.data.story._id))
      .then(() =>
        msgAlert({
          heading: 'Story Successfully Created',
          message: storyCreateSuccess,
          variant: 'success'
        }))
      .catch((error) => {
        msgAlert({
          heading: 'Failed creating your story: ' + error.message,
          message: storyCreateFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    if (this.state.created) {
      return <Redirect to={'stories/'} />
    }
    return (
      <>
        <h4>Create a Story</h4>

        <StoryForm
          title={this.state.title}
          story={this.state.story}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}/>

      </>
    )
  }
}
export default withRouter(CreateStory)
