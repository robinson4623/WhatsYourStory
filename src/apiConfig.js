let apiUrl
const apiUrls = {
  production: 'https://orca-app-z4ths.ondigitalocean.app/',
  development: 'http://localhost:8000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
