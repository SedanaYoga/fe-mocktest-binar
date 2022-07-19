import Head from 'next/head'
import { useCallback, useEffect } from 'react'
import NormalLayout from '../../layouts/Normal/NormalLayout'
import ProductItem from '../../components/ProductItem/ProductItem'
import styles from '../../styles/pages/Dashboard.module.scss'
import { useMainContext } from '../../context/MainContext'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const router = useRouter()
  const {
    userState,
    getProducts,
    productState: { isLoading, products },
  } = useMainContext()

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
      <main className={styles.dash}>
        <div className={styles.dashHead}>
          <h1>Product List</h1>
          <button>Create New</button>
        </div>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.dashProducts}>
            {products?.result.map((prod) => (
              <ProductItem key={prod.id} product={prod} />
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
