import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'

// Images
import heroPic from '../images/2.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art2Buisness</title>
        <meta name="description" content="Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className={styles.hero}>
          <div className='container mx-auto flex flex-col h-full px-4 py-9'>
            <Image src={heroPic} width={1504} height={602} alt="Art2Buisness" />
            <h1 className='w-full xl:w-5/6 mt-auto text-white'>Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством</h1>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
