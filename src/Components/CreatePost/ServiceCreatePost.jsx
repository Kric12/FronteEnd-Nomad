import axios from 'axios'

export const ServiceCreatePost = async ({ body }) => {

  const token = JSON.parse(localStorage.getItem('token'))
  console.log(token)

  const config = {
    headers:{
      'Authorization': token
    }
  }

  console.log(body, 333)
  const res = await axios.post('https://backend-nomadsociety-development.up.railway.app/post/newpost', body, config)
  console.log(res.data)

  return res.data
}
