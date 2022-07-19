import axios from 'axios'

export const loginUser = async (email, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/auth/login',
      baseURL: 'https://test-binar.herokuapp.com',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
      },
    })
    return response.data
  } catch (err) {
    console.log(err)
    return { err: err.message }
  }
}

export const createUser = async (name, email, password) => {
  var params = new URLSearchParams()
  params.append('name', name)
  params.append('email', email)
  params.append('password', password)
  try {
    const response = await axios({
      method: 'post',
      url: '/auth/signup',
      baseURL: 'https://test-binar.herokuapp.com',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: params,
    })
    return response.data
  } catch (err) {
    return { err: err.message }
  }
}

export const addProduct = async (token, name, price, imageurl) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/v1/products',
      baseURL: 'https://test-binar.herokuapp.com',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      data: {
        name,
        price,
        imageurl,
      },
    })
    return response.data
  } catch (err) {
    return { err: err.message }
  }
}

export const getProducts = async (token) => {
  try {
    const response = await axios({
      method: 'get',
      url: '/v1/products',
      baseURL: 'https://test-binar.herokuapp.com',
      headers: {
        Authorization: `${token}`,
      },
    })
    return response.data
  } catch (err) {
    return { err: err.message }
  }
}

export const getProductById = async (token, id) => {
  try {
    const response = await axios({
      method: 'get',
      url: `/v1/products/${id}`,
      baseURL: 'https://test-binar.herokuapp.com',
      headers: {
        Authorization: `${token}`,
      },
    })
    return response.data
  } catch (err) {
    return { err: err.message }
  }
}

export const updateProduct = async (token, id, obj) => {
  try {
    const response = await axios({
      method: 'put',
      url: `/v1/products/${id}`,
      baseURL: 'https://test-binar.herokuapp.com',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      data: obj,
    })
    return response.data
  } catch (err) {
    return { err: err.message }
  }
}

export const deleteProductById = async (token, id) => {
  try {
    const response = await axios({
      method: 'delete',
      url: `/v1/products/${id}`,
      baseURL: 'https://test-binar.herokuapp.com',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })
    return response.data
  } catch (err) {
    return { err: err.message }
  }
}
