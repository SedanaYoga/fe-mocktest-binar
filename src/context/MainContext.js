// Import Context
import { createContext, useContext } from 'react'
// Import Reducer
import { useUserReducer } from '../reducers/userReducer'
import { useProductReducer } from '../reducers/productReducer'
// Import utilities
import {
  loginUser,
  createUser,
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../utils/mainUtils'

const MainContext = createContext()

export const useMainContext = () => useContext(MainContext)

const MainContextProvider = ({ children }) => {
  const [userState, userDispatch] = useUserReducer()
  const [productState, productDispatch] = useProductReducer()

  const state = { userState, productState }
  const dispatch = {
    createUser: async (name, email, password) => {
      userDispatch({ type: 'REGISTER_USER_LOADING' })
      const createdUser = await createUser(name, email, password)
      if (!user.err) {
        userDispatch({ type: 'REGISTER_USER_SUCCESS' })
        if (user.errors) {
          return false
        } else createdUser
      } else {
        userDispatch({ type: 'REGISTER_USER_ERROR', payload: user.err })
      }
    },
    loginUser: async (email, password) => {
      userDispatch({ type: 'LOGIN_USER_LOADING' })
      const user = await loginUser(email, password)
      if (!user.err) {
        userDispatch({
          type: 'LOGIN_USER_SUCCESS',
          payload: user,
        })
        if (user.errors) {
          return false
        } else {
          return true
        }
      } else {
        userDispatch({ type: 'LOGIN_USER_ERROR', payload: user.err })
      }
    },
    logoutUser: () => {
      userDispatch({ type: 'LOGOUT_USER' })
    },
    getProducts: async (token) => {
      productDispatch({ type: 'PRODUCT_FETCH_LOADING' })
      const products = await getProducts(token)
      if (!products.err) {
        productDispatch({ type: 'PRODUCT_FETCH_SUCCESS', payload: products })
      } else {
        productDispatch({ type: 'PRODUCT_FETCH_ERROR', payload: products.err })
      }
    },
  }
  const value = { ...state, ...dispatch }
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export default MainContextProvider
