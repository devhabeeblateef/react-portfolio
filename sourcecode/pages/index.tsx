import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>devhabeeblateef</title>
        <meta name="description" content="devhabeeblateef's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>Hello World</div>
    </div>
  )
}

export default Home