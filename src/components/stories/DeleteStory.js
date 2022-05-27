import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import { deleteStorySuccess } from '../AutoDismissAlert/messages'

export default function Delete ({ user, msgAlert, id }) {
  const handleSubmit = (event) => {
    axios({
      url: apiUrl + `/stories/${id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Token ${user.token}`
      }
    })

      .then((res) => {
        return (res)
      })
      .then(() =>
        msgAlert({
          heading: 'Deleted Successfully',
          message: deleteStorySuccess,
          variant: 'success'
        })
      )
      .catch(console.error)
  }

  return (
    <div>
      <div>
        <button className="p-1 mt-2 btn-primary" value="submit" onClick={handleSubmit}>Delete</button>
      </div>
    </div>
  )
}
