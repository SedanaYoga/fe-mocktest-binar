import styles from './CreateProduct.module.scss'
import { useState } from 'react'
import { addProduct } from '../../utils/mainUtils'
import { useMainContext } from '../../context/MainContext'

const CreateProduct = ({ onClose }) => {
  const { userState, getProducts } = useMainContext()
  const [values, setValues] = useState({
    name: '',
    price: '',
    imageurl: '',
  })

  const changeHandler = (e) => {
    const { value, name } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const { name, price, imageurl } = values
    if (userState.user) {
      const token = userState.user.result.access_token
      if (token) {
        await addProduct(token, name, price, imageurl)
        await getProducts(token)
        onClose()
      }
    }
  }

  return (
    <div className={styles.create}>
      <h1>Create New</h1>
      <form className={styles.createForm} onSubmit={submitHandler}>
        <input
          type='text'
          onChange={changeHandler}
          name='name'
          value={values.name}
          placeholder='Product Name'
        />
        <input
          type='text'
          onChange={changeHandler}
          name='price'
          value={values.price}
          placeholder='Product (Dollar USD)'
        />
        <input
          type='text'
          onChange={changeHandler}
          name='imageurl'
          value={values.imageurl}
          placeholder='Image Url'
        />
        <div className={styles.createFormButtonWrapper}>
          <button type='submit'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct
