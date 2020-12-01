import React from 'react'
import Head from 'next/head'

import MaintenceLogo from '../assets/404.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Manutenção</title>
      </Head>

      <h1>Jessé Ávila</h1>
      <p>Site em construção.</p>
      <MaintenceLogo />
    </Container>
  )
}

export default Home
