import { useReducer } from 'react'

export function useUserReducer() {
  const initialState = {
    user: null,
    isLoading: false,
    error: '',
  }

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_USER_LOADING':
        return {
          ...state,
          isLoading: true,
          error: '',
        }
      case 'LOGIN_USER_SUCCESS':
        return {
          ...state,
          isLoading: false,
          user: action.payload,
          error: '',
        }
      case 'LOGIN_USER_ERROR':
        return {
          ...state,
          isLoading: false,
          user: null,
          error: action.payload,
        }
      case 'LOGOUT_USER':
        return {
          ...state,
          isLoading: false,
          user: null,
          error: '',
        }
      default:
        return state
    }
  }
  return useReducer(userReducer, initialState)
}
