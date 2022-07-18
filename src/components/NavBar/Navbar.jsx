import styles from './NavBar.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  const [isNavExpand, setIsNavExpand] = useState(false)
  const expandHamburger = () => {
    setIsNavExpand((prev) => !prev)
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
      <ul className={`${isNavExpand ? styles.expand : ''} noselect`}>
        <li style={{ '--index': 0 }}>
          <Link href='/'>Login</Link>
        </li>
        <li style={{ '--index': 1 }}>
          <Link href='/register'>Register</Link>
        </li>
        <li style={{ '--index': 2 }}>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
      </ul>
      {/* <a>Logout</a> */}
    </nav>
  )
}

export default NavBar
