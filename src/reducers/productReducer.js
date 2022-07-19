import { useReducer } from 'react'

export function useProductReducer() {
  const initialState = {
    products: null,
    isLoading: false,
    error: '',
  }

  const productReducer = (state, action) => {
    switch (action.type) {
      case 'PRODUCT_FETCH_LOADING':
        return {
          ...state,
          isLoading: true,
          products: [],
          error: '',
        }
      case 'PRODUCT_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          error: '',
        }
      case 'PRODUCT_FETCH_ERROR':
        return {
          ...state,
          isLoading: false,
          products: null,
          error: action.payload,
        }
      default:
        return state
    }
  }
  return useReducer(productReducer, initialState)
}
