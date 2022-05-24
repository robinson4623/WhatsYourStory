import React from 'react'
import Button from 'react-bootstrap/button'
import Card from 'react-bootstrap/card'

const StoryForm = ({ handleChange, handleSubmit, title, story }) => (
  <Card style={{ width: '18rem' }} class="shadow p-3 mb-5 bg-white rounded">
    <Card.Img variant="top" src="https://picsum.photos/286/180" />
    <Card.Body>
      <Card.Title>Story</Card.Title>
      <form onSubmit={handleSubmit}>
        <label>
          <input style= {{ paddingTop: '5px' }} name='title' onChange={handleChange} placeholder="Title of your story" value={title}></input>
        </label>
        <label>
          <textarea style= {{ paddingTop: '20px', margin: '10px' }} name='story' onChange={handleChange} placeholder="Give us all the details!" value={story}></textarea>
        </label>
        <Button type="submit" class="btn-outline-primary">Submit</Button>
      </form>
    </Card.Body>
  </Card>
)
export default StoryForm
