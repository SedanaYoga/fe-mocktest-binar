import styles from './Navbar.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMainContext } from '../../context/mainContext'

const NavBar = () => {
  const {
    userState: { user },
    logoutUser,
  } = useMainContext()
  const router = useRouter()

  const [isNavExpand, setIsNavExpand] = useState(false)
  const expandHamburger = () => {
    setIsNavExpand((prev) => !prev)
  }
  const logoutHandler = () => {
    logoutUser()
    router.push('/')
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <h1 className='noselect'>
          Sedana Yoga <span>| MOCK TEST</span>
        </h1>
      </div>
      <div onClick={expandHamburger} className={styles.navHamburger}>
        <Image src='/images/hamburger_icon.svg' alt='hamburger' layout='fill' />
      </div>
      {user && !user.errors ? (
        <ul className={`${isNavExpand ? styles.expand : ''} noselect`}>
          <li
            onClick={logoutHandler}
            role='button'
            className={styles.logoutButton}
          >
            Logout
          </li>
        </ul>
      ) : (
        <ul className={`${isNavExpand ? styles.expand : ''} noselect`}>
          <li style={{ '--index': 0 }}>
            <Link href='/'>Login</Link>
          </li>
          <li style={{ '--index': 1 }}>
            <Link href='/register'>Register</Link>
          </li>
          <li style={{ '--index': 2 }}>
            <Link href={user && !user.errors ? '/dashboard' : '/'}>
              Dashboard
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
