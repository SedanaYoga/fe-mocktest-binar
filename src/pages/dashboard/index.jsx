import Head from 'next/head'
import NormalLayout from '../../layouts/Normal/NormalLayout'
import styles from '../../styles/pages/Dashboard.module.scss'

const Dashboard = () => {
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

        <div className={styles.dashProducts}>Lists go here</div>
      </main>
    </div>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
