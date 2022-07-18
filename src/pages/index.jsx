import Head from 'next/head'
import Link from 'next/link'
import NormalLayout from '../layouts/Normal/NormalLayout'
import styles from '../styles/pages/Login.module.scss'
import { useMainContext } from '../context/mainContext'
import { useState } from 'react'

export default function Home() {
  const { loginUser } = useMainContext()

  const [userValues, setUserValues] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (e) => {
    const { name, value } = e.target
    setUserValues((prev) => ({ ...prev, [name]: value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const { email, password } = userValues
    await loginUser(email, password)
  }

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
          <form onSubmit={submitHandler} className={styles.loginForm}>
            <input
              type='email'
              onChange={changeHandler}
              name='email'
              placeholder='Email'
              value={userValues.email}
            />
            <input
              type='password'
              onChange={changeHandler}
              name='password'
              placeholder='Password'
              value={userValues.password}
            />
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
