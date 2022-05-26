import Form from 'react-bootstrap/Form'

// import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
// import Thumbnail from './components/Body/Thumbnail'

// const FormData = require('form-data')

export default function Update ({ user, id, msgAlerts }) {
  // const [imageId, setImageId] = useState(null)
  const [title, setTitle] = useState('')
  const [story, setStory] = useState('')

  // const handleChangeId = (event) => {
  //   setImageId(event.target.value)
  // }
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleChangeStory = (event) => {
    setStory(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // data.append('delete', selected)
    const updateStory = {

      story: {
        title: title,
        story: story
      }
    }
    console.log(updateStory)
    axios({
      url: apiUrl + `/stories/${id}/`,
      method: 'PATCH',
      headers: {
        Authorization: `Token ${user.token}`
      },
      data: {
        story: {
          title: title,
          story: story
        }
      }
    })
      .then((res) => {
        console.log('Updated')
        return (res)
      })
      .catch(console.error)
  }

  return (
    <div>

      <Form onSubmit={handleSubmit}>
        <div>
          <input id="storyId" name="title" onChange={handleChangeTitle} type="text" placeholder="edit Title" value={title}></input>
          <input id="storyId" name="story" onChange={handleChangeStory} type="text" placeholder="edit Story" value={story}></input>
          <button value="submit" onClick={handleSubmit}>Update</button>
        </div>
      </Form>

    </div>
  )
}
