import React from 'react'
import Button from 'react-bootstrap/button'

const StoryForm = ({ handleChange, handleSubmit, title, story }) => (
  <form onSubmit={handleSubmit}>
    <label>Title
      <input name='title' onChange={handleChange} placeholder="Title of your story" value={title}></input>
    </label>
    <label>Story
      <input name='story' onChange={handleChange} placeholder="Give us all the details!" value={story}></input>
    </label>
    <Button type="submit" class="btn-outline-primary">Submit</Button>
  </form>
)

export default StoryForm
