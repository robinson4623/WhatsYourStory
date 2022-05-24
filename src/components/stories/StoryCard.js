import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/card'

const StoryCard = ({ title, story }) => {
  return (
    <div className='card text-center'>
      <div className='overflow'>
        <img src='https://picsum.photos/286/180' alt='Random Image' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>{story}</p>
        <a href="#" className="btn btn-outline-success">Show Story</a>
      </div>
    </div>
  )
}

export default StoryCard
