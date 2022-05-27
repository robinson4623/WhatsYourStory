import React from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'

const PromptForm = ({ handleChange, handleSubmit, name, prompt }) => (
  <Card style={{ width: '25rem' }} className="shadow p-3 mb-5 bg-white rounded" >
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create a prompt</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <input name='name' type="text" onChange={handleChange} placeholder="Give your prompt a name" value={name}></input>
          </Row>
          <Row>
            <textarea className="p-3 mt-2" name='prompt' type="text" onChange={handleChange} placeholder="What would you like to ask?" value={prompt}></textarea>
          </Row>
          <Button className="p-1 mt-2 btn-primary" type="submit" >Submit</Button>
        </Form>
      </div>
    </div>
  </Card>
)

export default PromptForm
