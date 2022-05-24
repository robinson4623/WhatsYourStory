import React from 'react'
import Button from 'react-bootstrap/button'

const PromptForm = ({ handleChange, handleSubmit, name, prompt }) => (
  <form onSubmit={handleSubmit}>
    <label>Name
      <input name='name' onChange={handleChange} placeholder="Give your prompt a name" value={name}></input>
    </label>
    <label>Prompt
      <input name='prompt' onChange={handleChange} placeholder="What prompt would you like to suggest?" value={prompt}></input>
    </label>
    <Button type="submit" class="btn-outline-primary">Submit</Button>
  </form>
)

export default PromptForm
