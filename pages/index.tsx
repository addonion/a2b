import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'

// Images
import heroPic from '../images/1.png'
import aboutPic from '../images/2.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art2Buisness</title>
        <meta name="description" content="Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством" />
      </Head>

      <Layout>
        <section className={styles.hero}>
          <div className='container mx-auto flex flex-col h-full px-4 py-5 md:py-9'>
            <div className='my-auto md:mb-8 landscape:hidden lg:landscape:block'>
              <Image src={heroPic} width={1504} height={657} layout="responsive" alt="Art2Buisness" />
            </div>
            <h1 className='w-full xl:w-5/6 mt-auto'>
              Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством
            </h1>
          </div>
        </section>

        <section>
          <div className='container mx-auto flex flex-col h-full px-4 py-5 md:py-9'>
            <div className='my-auto md:mb-8 landscape:hidden lg:landscape:block'>
              <Image src={aboutPic} width={1504} height={601} layout="responsive" alt="Art2Buisness" />
            </div>
            <h2>
              ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ
            </h2>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
