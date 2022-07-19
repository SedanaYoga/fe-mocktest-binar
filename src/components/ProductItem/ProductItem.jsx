import styles from './ProductItem.module.scss'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { useState } from 'react'

const ProductItem = ({
  product,
  getItemId,
  showUpdateModal,
  showDeleteModal,
}) => {
  const { id, name, price, imageurl } = product
  const [imgSrc, setImgSrc] = useState(imageurl)
  const imageNotFound = () => {
    setImgSrc('/images/default-image.png')
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemImage}>
        <div className={styles.itemImageIcons}>
          <FiEdit
            onClick={() => {
              getItemId(id)
              showUpdateModal()
            }}
            color='black'
            className={styles.itemImageIcon}
          />
          <MdDeleteOutline
            onClick={() => {
              getItemId(id)
              showDeleteModal()
            }}
            color='black'
            className={styles.itemImageIcon}
          />
        </div>
        <img src={imgSrc} onError={imageNotFound} alt={name} />
      </div>
      <div className={styles.itemInfo}>
        <h3 className={styles.itemInfoName}>{name}</h3>
        <p>{`$${price}`}</p>
      </div>
    </div>
  )
}

export default ProductItem
