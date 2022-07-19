import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NormalLayout from '../../layouts/Normal/NormalLayout'
import styles from '../../styles/pages/Register.module.scss'
import { createUser } from '../../utils/mainUtils'

const Register = () => {
  const [regValues, setRegValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  const router = useRouter()

  const changeHandler = (e) => {
    const { name, value } = e.target
    setRegValues((prev) => ({ ...prev, [name]: value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const { name, email, password } = regValues
    const createdUser = await createUser(name, email, password)
    if (createdUser) {
      router.push('/')
    }
  }

  return (
    <div className='container'>
      <Head>
        <title>Register - Frontend Mock Test</title>
        <meta
          name='description'
          content='Sedana Yoga Frontend Mock Test Register Page'
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.register}>
          <h1 className={styles.registerTitle}>Register</h1>
          <form onSubmit={submitHandler} className={styles.registerForm}>
            <input
              onChange={changeHandler}
              value={regValues.name}
              type='text'
              placeholder='Name'
              name='name'
            />
            <input
              onChange={changeHandler}
              value={regValues.email}
              type='email'
              placeholder='Email'
              name='email'
            />
            <input
              onChange={changeHandler}
              value={regValues.password}
              type='password'
              placeholder='Password'
              name='password'
            />
            <button type='submit'>Register</button>
          </form>
        </div>
        <p>
          Already have account?
          <span>
            <Link href='/'> Login</Link>
          </span>
        </p>
      </main>
    </div>
  )
}

export default Register

Register.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
