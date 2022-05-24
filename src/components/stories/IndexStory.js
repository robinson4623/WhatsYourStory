
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
// import Delete from './Delete'
// import Update from './Update'

export default function IndexStory ({ msgAlert, user }) {
  const [stories, setStories] = useState([])
  // const [loading, setLoading] = useState(false)
  console.log(stories)
  useEffect(() => {
    axios({
      method: 'GET',
      url: apiUrl + '/stories',
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
        // console.log(res)
        setStories(res.data)
        // .then(() => setLoading(false))
      })
      .catch(console.error)
  }, []
  )

  if (stories.length < 1) {
    return (
      <h1>loading...</h1>
    )
  } else {
    const storyJSX = stories.stories.map((story) => (
      <div key={story.id}>
        <img className='story-index' src={story.url} />
        {/* <li>Owner ID: {upload.owner}</li> */}
        <h4>Title: {story.title}</h4>
        <p>Story: {story.story}</p>
        {/* <li>Upload ID: {upload._id}</li> */}
        {/* <Update id={upload._id} user={user} msgAlert={msgAlert} />
        <Delete id={upload._id} user={user} msgAlert={msgAlert} /> */}
      </div>
    ))

    return (
      <div>
        {/* {uploads ? ({ uploadJSX }) : ('')}
      {loading ? (<img className='display-loading' alt='loading gif' src='https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif' />) : ('')} */}
        <h4>My Stories</h4>
        <h3>{storyJSX}</h3>
      </div>
    )
  }
}
