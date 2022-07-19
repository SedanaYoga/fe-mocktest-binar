import React from 'react'
import Navbar from '../../components/NavBar/Navbar.jsx'
import styles from './NormalLayout.module.scss'
import MainContextProvider from '../../context/MainContext'
import { IconContext } from 'react-icons'

const NormalLayout = ({ children }) => {
  const reactIconsValue = {
    color: 'black',
    size: '1.2rem',
  }
  return (
    <MainContextProvider>
      <IconContext.Provider value={reactIconsValue}>
        <div className={styles.container}>
          <Navbar />
          {children}
        </div>
      </IconContext.Provider>
    </MainContextProvider>
  )
}

export default NormalLayout
