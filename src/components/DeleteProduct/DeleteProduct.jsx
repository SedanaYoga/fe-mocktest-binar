import { useCallback, useState, useEffect } from 'react'
import styles from './DeleteProduct.module.scss'
import { useMainContext } from '../../context/MainContext'
import { deleteProductById, getProductById } from '../../utils/mainUtils'

const DeleteProduct = ({ onClose, id }) => {
  const { userState, getProducts } = useMainContext()
  const [productName, setProductName] = useState(null)

  const getProducNameEffect = useCallback(async (id) => {
    const token = userState.user.result.access_token
    const product = await getProductById(token, id)
    const name = product.result.name
    setProductName(name) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getProducNameEffect(id) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProducNameEffect])

  const deleteHandler = async () => {
    if (userState.user) {
      const token = userState.user.result.access_token
      if (token) {
        await deleteProductById(token, id)
        await getProducts(token)
        onClose()
      }
    }
  }

  return (
    <div className={styles.delete}>
      {!productName ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>Are you sure to delete {productName}?</h2>
          <div className={styles.deleteFormButtonWrapper}>
            <button onClick={onClose} type='button'>
              No
            </button>
            <button onClick={deleteHandler} type='button'>
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DeleteProduct
