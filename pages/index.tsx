import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'

// Images
import heroPic from '../images/hero.png'
import teambuildingPic from '../images/teambuilding.png'
import contactsPic from '../images/contacts.png'

const menuItems = [
  ['Тимбилдинг', '#teambuilding'],
  ['Цена', '#price'],
  ['А ещё мы…', '#more'],
  ['Наша команда', '#team'],
  ['Контакты', '#contacts']
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art2Buisness</title>
        <meta name="description" content="Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством" />
      </Head>

      <Layout>
        <section className={`${styles.hero} py-64 xl:py-16`}>
          <div className='container mx-auto flex flex-col h-full px-4'>
            <div className='my-auto md:mb-0'>
              <div className='hidden md:block'>
                <Image src={heroPic} width={1504} height={657} layout="responsive" priority={true} alt="Art2Buisness" />
              </div>
              <h1 className='w-full xl:w-5/6 md:mt-10 xl:mt-16'>
                Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством
              </h1>
            </div>
          </div>
        </section>

        <nav className={`${styles.navigation} hidden lg:block`}>
          <div className='container mx-auto flex'>
            {menuItems.map(([title, url]) => (
              <Link href={url} key={url}>
                <a className={`${styles.navigation__link} pl-4 pr-10 py-4`}>
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </nav>

        <section id='teambuilding' className='container mx-auto flex flex-col px-4 py-16 md:py-64'>
          <div>
            <Image src={teambuildingPic} width={1504} height={601} layout="responsive" alt="ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ" />
          </div>
          <h2 className='mt-10'>
            ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ
          </h2>
        </section>
        
        {/* КОНТАКТЫ */}
        <section id='contacts' className='container mx-auto grid md:grid-cols-2 gap-4 px-4'>
          <div className='my-auto'>
            <h2 className='mb-2'>КОНТАКТЫ:</h2>
            <p>
              +7 (919) 488-66-76 — Анастасия,
              <br />
              +7 (951) 942-82-85 — Лейла,
              <br />
              art2.business@yandex.ru
            </p>
          </div>
          <div className={styles.contacts__pic}>
            <div>
              <Image src={contactsPic} width={744} height={1062} layout="responsive" alt="КОНТАКТЫ" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
