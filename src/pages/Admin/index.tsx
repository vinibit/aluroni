import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import temaStyles from 'styles/Tema.module.scss'

const Admin: React.FC = () => {

  const { user } = useParams()
  const isAdmin = user === 'vini'

  return (
    !isAdmin ? <Navigate to='/' /> : 
      <section className={temaStyles.container}>
        <h3 className={temaStyles.titulo}>
                Admin Page
        </h3>
        <p style={{ marginBottom: '30%' }}>Welcome to the admin page.</p>            
      </section>
  )
}

export default Admin