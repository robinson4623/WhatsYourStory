import React, { useState, useEffect } from 'react'
import { Form, Card, Button, Row } from 'react-bootstrap'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const StoryForm = ({ handleChange, handleSubmit, title, story, user }) => {
  // const [prompts, setPrompts] = useState([])
  const [randomPrompt, setRandomPrompt] = useState('')
  const randomIndex = (arrSize) => {
    return Math.floor(Math.random() * arrSize)
  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: apiUrl + '/prompts',
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
      .then((res) => {
        // console.log(Object.values(res.data.uploads))
        // return (Object.values(res.data.uploads))
        return res
      })

      .then((res) => {
        // console.log(res.data.prompts)
        // setPrompts(res.data.prompts)
        setRandomPrompt(res.data.prompts[randomIndex(res.data.prompts.length)].prompt)
        // .then(() => setLoading(false))
      })
      .catch(console.error)
  }, []
  )
  return (
    <Card style={{ width: '40rem' }} className="shadow p-3 mb-5 bg-white rounded mx-auto" >
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Tell us a story!</h3>
          <Card.Img className="justify-content-md-center" variant="top" src="https://picsum.photos/286/180" />
          <Card.Body>
            <Card.Title>{randomPrompt}</Card.Title>

            <Form onSubmit={handleSubmit}>
              <Row>
                <input className="p-1 mt-2" name='title' onChange={handleChange} placeholder="Give your story a title." value={title}></input>
              </Row>
              <Row>
                <textarea className="p-2 mt-2" name='story' onChange={handleChange} placeholder="Tell us all about it!" value={story}></textarea>
              </Row>
              <Button className="p-1 mt-2 btn-primary" type="submit" >Submit</Button>
            </Form>
          </Card.Body>
        </div>
      </div>
    </Card>

  )
}

export default StoryForm
