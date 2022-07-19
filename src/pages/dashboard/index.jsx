import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import NormalLayout from '../../layouts/Normal/NormalLayout'
import ProductItem from '../../components/ProductItem/ProductItem'
import styles from '../../styles/pages/Dashboard.module.scss'
import { useMainContext } from '../../context/MainContext'
import { useRouter } from 'next/router'
import Modal from '../../components/Modal/Modal'
import CreateProduct from '../../components/CreateProduct/CreateProduct'
import UpdateProduct from '../../components/UpdateProduct/UpdateProduct'
import DeleteProduct from '../../components/DeleteProduct/DeleteProduct'

const Dashboard = () => {
  const router = useRouter()
  const {
    userState,
    getProducts,
    productState: { isLoading, products },
  } = useMainContext()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [selectedId, setSelectedId] = useState('')

  const getProductsEffect = useCallback(async (token) => {
    await getProducts(token)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (userState.user) {
      const token = userState.user.result.access_token
      if (token) {
        getProductsEffect(token)
      }
    } else {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProductsEffect, router])

  return (
    <div className='container'>
      <Head>
        <title>Dashboard - Frontend Mock Test</title>
        <meta
          name='description'
          content='Sedana Yoga Frontend Mock Test Register Page'
        />
      </Head>

      <Modal
        show={showCreateModal}
        onClose={() => {
          setShowCreateModal(false)
        }}
      >
        <CreateProduct
          onClose={() => {
            setShowCreateModal(false)
          }}
        />
      </Modal>

      <Modal
        show={showUpdateModal}
        onClose={() => {
          setShowUpdateModal(false)
        }}
      >
        <UpdateProduct
          onClose={() => {
            setShowUpdateModal(false)
          }}
          id={selectedId}
        />
      </Modal>

      <Modal
        show={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
        }}
      >
        <DeleteProduct
          id={selectedId}
          onClose={() => {
            setShowDeleteModal(false)
          }}
        />
      </Modal>

      <main className={styles.dash}>
        <div className={styles.dashHead}>
          <h1>Product List</h1>
          <button onClick={() => setShowCreateModal(true)}>Create New</button>
        </div>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.dashProducts}>
            {products?.result.map((prod) => (
              <ProductItem
                key={prod.id}
                product={prod}
                getItemId={(id) => setSelectedId(id)}
                showUpdateModal={() => setShowUpdateModal(true)}
                showDeleteModal={() => setShowDeleteModal(true)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
