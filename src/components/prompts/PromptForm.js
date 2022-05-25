import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const PromptForm = ({ handleChange, handleSubmit, name, prompt }) => (
  <Card className="shadow p-3 mb-5 bg-white rounded" >
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create a prompt</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Prompt Name
            <input name='name' onChange={handleChange} placeholder="name" value={name}></input>
          </Form.Label>
          <Form.Label>Prompt
            <input name='prompt' onChange={handleChange} placeholder="What would you like to ask?" value={prompt}></input>
          </Form.Label>
          <Button type="submit" class="btn-outline-primary">Submit</Button>
        </Form>
      </div>
    </div>
  </Card>
)

export default PromptForm
