import { Form, Row } from 'react-bootstrap'

// import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { updateStorySuccess, updateStoryFailure } from './../AutoDismissAlert/messages'

export default function Update ({ user, id, msgAlert }) {
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
      .then(() =>
        msgAlert({
          heading: 'Updated Successfully',
          message: updateStorySuccess,
          variant: 'success'
        })
      )
      .catch((error) => {
        msgAlert({
          heading: 'Failed updating your story: ' + error.message,
          message: updateStoryFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <div>

      <Form onSubmit={handleSubmit}>
        <div>
          <Row>
            <input id="storyId" name="title" onChange={handleChangeTitle} type="text" placeholder="edit Title" value={title}></input>
          </Row>
          <Row>
            <textarea id="storyId" name="story" onChange={handleChangeStory} type="textarea" placeholder="edit Story" value={story}></textarea>
          </Row>
          <button value="submit" onClick={handleSubmit}>Update</button>
        </div>
      </Form>

    </div>
  )
}
