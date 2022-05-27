import apiUrl from '../apiConfig'
import axios from 'axios'

export const createStory = (data, user) => {
  // console.log('user', user)
  // console.log('data', data)

  return axios({
    method: 'POST',
    url: apiUrl + '/stories/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: {
      story: {
        title: data.title,
        story: data.story
      }
    }
  })
}

// export const signIn = (credentials) => {
//   return axios({
//     url: apiUrl + '/sign-in/',
//     method: 'POST',
//     data: {
//       credentials: {
//         email: credentials.email,
//         password: credentials.password
//       }
//     }
//   })
// }

// export const signOut = (user) => {
//   return axios({
//     url: apiUrl + '/sign-out/',
//     method: 'DELETE',
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// export const changePassword = (passwords, user) => {
//   return axios({
//     url: apiUrl + '/change-password/',
//     method: 'PATCH',
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     },
//     data: {
//       passwords: {
//         old: passwords.oldPassword,
//         new: passwords.newPassword
//       }
//     }
//   })
// }
