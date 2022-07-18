import Head from 'next/head'
import Link from 'next/link'
import NormalLayout from '../../layouts/Normal/NormalLayout'
import styles from '../../styles/pages/Register.module.scss'

const Register = () => {
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
          <form className={styles.registerForm}>
            <input type='text' placeholder='Name' name='name' />
            <input type='email' placeholder='Email' name='email' />
            <input type='password' placeholder='Password' name='password' />
            <button type='submit'>Register</button>
          </form>
        </div>
        <p>
          Already have account?{' '}
          <span>
            <Link href='/'>Login</Link>
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
