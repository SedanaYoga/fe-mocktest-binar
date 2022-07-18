import Head from 'next/head'
import Link from 'next/link'
import NormalLayout from '../layouts/Normal/NormalLayout'
import styles from '../styles/pages/Login.module.scss'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Login - Frontend Mock Test</title>
        <meta
          name='description'
          content='Sedana Yoga Frontend Mock Test Login Page'
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.login}>
          <h1 className={styles.loginTitle}>Login</h1>
          <form className={styles.loginForm}>
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />
            <button type='submit'>Login</button>
          </form>
        </div>
        <p>
          Don&apos;t have an account?{' '}
          <span>
            <Link href='/register'>Register</Link>
          </span>
        </p>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
