import React from 'react'
import Navbar from '../../components/NavBar/Navbar.jsx'
import styles from './NormalLayout.module.scss'
import MainContextProvider from '../../context/MainContext'

const NormalLayout = ({ children }) => {
  return (
    <MainContextProvider>
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
    </MainContextProvider>
  )
}

export default NormalLayout
