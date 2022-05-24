import apiUrl from '../apiConfig'
import axios from 'axios'

export const createPrompt = (data, user) => {
  console.log('user', user)
  console.log('data', data)

  return axios({
    method: 'POST',
    url: apiUrl + '/prompts/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: {
      prompt: {
        name: data.name,
        prompt: data.prompt
      }
    }
  })
}
