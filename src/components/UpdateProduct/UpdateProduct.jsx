import styles from './UpdateProduct.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { updateProduct, getProductById } from '../../utils/mainUtils'
import { useMainContext } from '../../context/MainContext'

const UpdateProduct = ({ onClose, id }) => {
  const { userState, getProducts } = useMainContext()
  const [values, setValues] = useState({
    name: '',
    price: '',
    imageurl: '',
  })

  const getProductByIdEffect = useCallback(async (id) => {
    const token = userState.user.result.access_token
    const product = await getProductById(token, id)
    const selectedValues = {
      name: product.result.name,
      price: product.result.price,
      imageurl: product.result.imageurl,
    }
    setValues(selectedValues) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getProductByIdEffect(id) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProductByIdEffect])

  const changeHandler = (e) => {
    const { value, name } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const updated_at = new Date().toISOString()
    const newObj = { ...values, updated_at }
    if (userState.user) {
      const token = userState.user.result.access_token
      if (token) {
        await updateProduct(token, id, newObj)
        await getProducts(token)
        onClose()
      }
    }
  }

  return (
    <div className={styles.update}>
      <h1>Edit Product</h1>
      <form className={styles.updateForm} onSubmit={submitHandler}>
        <input
          type='text'
          onChange={changeHandler}
          name='name'
          value={values?.name}
          placeholder='Product Name'
        />
        <input
          type='text'
          onChange={changeHandler}
          name='price'
          value={values?.price}
          placeholder='Product (Dollar USD)'
        />
        <input
          type='text'
          onChange={changeHandler}
          name='imageurl'
          value={values?.imageurl}
          placeholder='Image Url'
        />
        <div className={styles.updateFormButtonWrapper}>
          <button type='submit'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProduct
