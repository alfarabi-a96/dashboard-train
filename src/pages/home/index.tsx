import React from 'react'
import { Button } from '@mui/material'

const Home: React.FC = () => {
  return (
    <div style={{display:'flex', flexDirection: 'column',justifyContent:'center', alignItems:'center'}}>
      <h1>Welcome</h1>
      <p>Welcome to my App!</p>
      <Button variant='contained' href='/main/dashboard'>masuk</Button>
    </div>
  )
}

export default Home
