import type { NextPage } from "next";
import { GraphQLClient, gql } from "graphql-request";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Form from "../components/Form";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Main.module.scss";

// Images
import heroPic from "../images/hero.png";
import teambuildingPic from "../images/teambuilding.png";
import more2Pic from "../images/more2.png";
import more3Pic from "../images/more3.png";
import more4Pic from "../images/more4.png";
import feedbackPic from "../images/feedback.png";
import teamNastya from "../images/team_nastya.png";
import teamLeila from "../images/team_leila.png";
import contactsPic from "../images/contacts.png";

const teamAchivments: string[] = [
  "Арт-медиаторы и специалисты образовательного отдела музея современного искусства PERMM, преподаватели школы дизайна «Точка»;",
  "Курировали масштабные арт-резиденции в Перми и Пермском крае, Владикавказе, Полярном, Самаре и даже на закрытой территории заповедника «Басеги»;",
  "Наши проекты входят в топ-10 лучших проектов России по работе с аудиторией (2021 г.), мы победители международного конкурса арт-объектов «ВолгаФеста-2021». Выиграли грантовый конкурс от компании «Северсталь»;",
  "Участники школы медиации от Уральской индустриальной биеннале, программы по цифровому проектированию от Музея Москвы, всероссийского музейного форума в Санкт-Петербурге;",
  "Сотрудничаем с современными художниками, дизайнерами, кураторами и предпринимателями.",
];

const Home: NextPage<IMain> = ({ mainPage }: IMain) => {
  return (
    <>
      <Head>
        <title>{mainPage.seo.title}</title>
        <meta name="description" content={mainPage.seo.description} />
        <link rel="canonical" href="https://www.art2business.ru/" />
      </Head>

      <Layout>
        {/* Hero */}
        <section className={`${styles.hero} py-32 lg:py-16`}>
          <div className="container mx-auto flex flex-col h-full px-8 xl:px-4">
            <div className="my-auto md:mb-0">
              <Image src={heroPic} width={1504} height={657} layout="responsive" priority={true} placeholder="blur" alt="Art2Buisness" />
              <h1 className="w-full mt-5 md:mt-10 xl:mt-16">{mainPage.title}</h1>
            </div>
          </div>
        </section>

        {/* Навигация десктоп */}
        <Nav />

        {/* ТИМБИЛДИНГ */}
        <section id="teambuilding" className={`${styles.teambuilding} pt-16 md:pt-32 `}>
          <div className="container mx-auto px-8 xl:px-4 pb-8 md:pb-16">
            <div>
              <Image src={teambuildingPic} width={1504} height={601} layout="responsive" placeholder="blur" className="z-50" alt="ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ" />
              <h2 className="h1 my-10">Тимбилдинг с современным искусством</h2>
            </div>
          </div>

          <div className={styles.teambuilding__about}>
            <div className="lg:container lg:mx-auto lg:py-16 relative z-10">
              <div className="lg:grid grid-cols-2 gap-32 lg:px-8 xl:px-4">
                <div className={`${styles.teambuilding__about__first} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                  <h3 className="mb-4">Что это?</h3>
                  <div className="mb-16 lg:mb-32" dangerouslySetInnerHTML={{ __html: mainPage.what.html }} />
                  <Image src={more2Pic} width={208} height={200} layout="fixed" placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
                </div>
                <div className={`${styles.teambuilding__about__second} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                  <h3 className="mb-4">Что мы будем делать?</h3>
                  <div className="mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: mainPage.process.html }} />
                  <div className="text-right">
                    <Image src={more3Pic} width={161} height={288} layout="fixed" placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Цена */}
        <section id="price" className={`${styles.price} `}>
          <div className="container mx-auto lg:grid lg:grid-cols-3 xl:grid-cols-2 lg:gap-32 px-8 xl:px-4 py-16 md:py-32">
            <div className="lg:col-span-2 xl:col-span-1">
              <h2 className="mb-4">Цена:</h2>
              <ul className={`${styles.price__list} mb-8`}>
                <li>Продолжительность: 1,5 — 2 часа;</li>
                <li>Количество участников: до 30 человек;</li>
                <li>Место: ваш офис или коворкинг в центре города;</li>
                <li>Цена: 1000₽ с человека + (опционально) аренда помещения.</li>
              </ul>
              <Form />
            </div>
            <div>
              <div className="w-1/4 lg:w-full xl:w-1/2 ml-auto">
                <Image src={more4Pic} width={326} height={700} layout="responsive" placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
              </div>
            </div>
          </div>
        </section>

        {/* Отзыв */}
        <section className={`${styles.feedback} container mx-auto px-8 xl:px-4 py-16 md:py-32 lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-32`}>
          <div className="w-2/3 mb-8 lg:w-full lg:col-span-1 lg:mb-0">
            <div>
              <Image src={feedbackPic} width={426} height={535} layout="responsive" placeholder="blur" alt="Юлия, директор общеобразовательной школы" />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 my-auto">
            <div className={`${styles.feedback__text} mb-4`}>
              «У меня возник вопрос как поздравить свою административную команду с 8 марта. Девчонки рассказали что такое современное искусство, как можно его прочитывать и понимать. А совместное творчество вызвало
              эмоции отличного настроения. Было круто!»
            </div>
            <p className="text-gray-400">Юлия, директор общеобразовательной школы</p>
          </div>
        </section>

        {/* Наша команда */}
        <section id="team" className={`${styles.team}`}>
          <div className="container mx-auto flex flex-col px-8 xl:px-4 py-16 md:py-32 text-white">
            <h2 className="mb-8">Команда а2б:</h2>

            <div className="grid grid-cols-2 gap-16 xl:gap-32">
              <div>
                <Image src={teamNastya} width={663} height={668} layout="responsive" placeholder="blur" alt="Анастасия" />
              </div>
              <div>
                <Image src={teamLeila} width={680} height={688} layout="responsive" placeholder="blur" alt="Анастасия" />
              </div>
            </div>

            {teamAchivments.map((text, index) => (
              <div className={`${styles.team__achivment} mt-8 lg:mt-12 p-6 md:py-12 md:px-8 lg:px-32 xl:px-64 text-black bg-white`} key={index}>
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* КОНТАКТЫ */}
        <section id="contacts" className="container mx-auto grid lg:grid-cols-2 gap-4 px-8 xl:px-4 py-16 md:py-32">
          <div className="my-auto pb-16">
            <h2 className="mb-4">Контакты:</h2>
            <p className="mb-1">
              <Link href="tel:+79194886676">
                <a className="text-blue-600 underline hover:text-blue-700 hover:no-underline">+7 (919) 488-66-76</a>
              </Link>
               — Анастасия,
            </p>
            <p className="mb-1">
              <Link href="tel:+79519428285">
                <a className="text-blue-600 underline hover:text-blue-700 hover:no-underline">+7 (951) 942-82-85</a>
              </Link>
               — Лейла,
            </p>
            <p className="mb-12">
              <Link href="mailto:art2.business@yandex.ru">
                <a className="text-blue-600 underline hover:text-blue-700 hover:no-underline">art2.business@yandex.ru</a>
              </Link>
            </p>
            <h3>А еще мы:</h3>
            <ul className={styles.contacts__more}>
              <li>Разрабатываем креативные концепции для бизнеса;</li>
              <li>Проводим мероприятия;</li>
              <li>Тренируем креативное мышление;</li>
              <li>Помогаем понять современное искусство.</li>
            </ul>
          </div>
          <div className={styles.contacts__pic}>
            <div className="pb-3">
              <Image src={contactsPic} width={744} height={1062} layout="responsive" placeholder="blur" alt="КОНТАКТЫ" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const hygraph = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/cl591wrec5kb801um1xjoe5g8/master");

  const { mainPage } = await hygraph.request(
    gql`
      {
        mainPage(where: { id: "cl59271xi8gpq0erras94gl6p" }) {
          seo {
            title
            description
          }
          title
          what {
            html
          }
          process {
            html
          }
        }
      }
    `
  );

  return {
    props: {
      mainPage,
    },
  };
}

type TRithText = {
  html: string;
};
interface IMain {
  mainPage: {
    seo: {
      title: string;
      description: string;
    };
    title: string;
    what: TRithText;
    process: TRithText;
  };
}

export default Home;
