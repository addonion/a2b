import type { NextPage } from "next";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Main.module.scss";

// Images
import heroPic from "../images/hero.png";
import teambuildingPic from "../images/teambuilding.png";
import feedbackPic from "../images/feedback.png";
import contactsPic from "../images/contacts.png";

const menuItems: [string, string][] = [
  ["Тимбилдинг", "#teambuilding"],
  ["Цена и что входит", "#price"],
  ["Наша команда", "#team"],
  ["Контакты", "#contacts"],
];
const teamAchivments: string[] = [
  "Арт-медиаторы и специалисты образовательного отдела музея современного искусства PERMM, преподаватели школы дизайна «Точка»;",
  "Курировали масштабные арт-резиденции в Перми и Пермском крае, Владикавказе, Полярном, Самаре и даже на закрытой территории заповедника «Басеги»;",
  "Наши проекты входят в топ-10 лучших проектов России по работе с аудиторией (2021 г.), мы победители международного конкурса арт-объектов «ВолгаФеста-2021». Выиграли грантовый конкурс от компании «Северсталь»;",
  "Участники школы медиации от Уральской индустриальной биеннале, программы по цифровому проектированию от Музея Москвы, всероссийского музейного форума в Санкт-Петербурге;",
  "Сотрудничаем с современными художниками, дизайнерами, кураторами и предпринимателями.",
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Проведение тимбилдинга в Перми — Art2Buisness</title>
        <meta name="description" content="Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством" />
        <link rel="canonical" href="https://www.art2business.ru/" />
      </Head>

      <Layout>
        {/* Hero */}
        <section className={`${styles.hero} py-32 xl:py-16`}>
          <div className="container mx-auto flex flex-col h-full px-4">
            <div className="my-auto md:mb-0">
              <div className="hidden md:block">
                <Image src={heroPic} width={1504} height={657} layout="responsive" priority={true} placeholder="blur" alt="Art2Buisness" />
              </div>
              <h1 className="w-full xl:w-5/6 mt-5 md:mt-10 xl:mt-16">Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством</h1>
            </div>
          </div>
        </section>

        {/* Навигация десктоп */}
        <nav className={`${styles.navigation} hidden lg:block`}>
          <div className="container mx-auto flex">
            {menuItems.map(([title, url]) => (
              <Link href={url} key={url}>
                <a className={`${styles.navigation__link} pl-4 pr-10 py-4`}>{title}</a>
              </Link>
            ))}
          </div>
        </nav>

        {/* ТИМБИЛДИНГ */}
        <section id="teambuilding" className="container mx-auto px-4 py-32 md:py-64">
          <div>
            <Image src={teambuildingPic} width={1504} height={601} layout="responsive" placeholder="blur" alt="ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ" />
          </div>
          <h2 className="my-10">ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ</h2>
          <div className="md:grid grid-cols-2 gap-12">
            <div>
              <h3>Что это?</h3>
              <ul>
                <li>Мероприятие, где современное искусство становится инструментом общения и расслабления.</li>
                <li>Повод заняться творчеством в комфортной обстановке.</li>
              </ul>
            </div>
            <div>
              <h3>Что мы будем делать?</h3>
              <ul>
                <li>Познакомимся с работами современных художников и научимся их интерпретировать</li>
                <li>Вместе создадим концептуальный арт-объект или поп-ап выставку</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Цена */}
        <section id="price" className={`${styles.price} `}>
          <div className="container mx-auto lg:grid lg:grid-cols-2 lg:gap-12 xl:grid-cols-5 px-4 py-32 lg:py-64">
            <div className="xl:col-span-3">
              <h2 className="mb-4">ЦЕНА:</h2>
              <ul className={`${styles.price__list} mb-8`}>
                <li>Продолжительность: 1,5 — 2 часа;</li>
                <li>Количество участников: до 30 человек;</li>
                <li>Место: ваш офис или коворкинг в центре города;</li>
                <li>Цена: 1000₽ с человека + (опционально) аренда помещения.</li>
              </ul>
              <p>А еще мы:</p>
              <ul className={styles.price__more}>
                <li>Разрабатываем креативные концепции для бизнеса;</li>
                <li>Проводим мероприятия;</li>
                <li>Тренируем креативное мышление;</li>
                <li>Помогаем понять современное искусство.</li>
              </ul>
            </div>
            <div className="mt-12 lg:mt-14 xl:col-span-2">
              <Form />
            </div>
          </div>
        </section>

        {/* Отзыв */}
        <section className={`${styles.feedback} container mx-auto px-4 py-16 md:py-32 md:grid md:grid-cols-3 md:gap-10 lg:gap-32`}>
          <div className="w-1/2 mb-8 md:w-full md:col-span-1 md:mb-0">
            <div>
              <Image src={feedbackPic} width={426} height={535} layout="responsive" placeholder="blur" alt="Юлия, директор общеобразовательной школы" />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 my-auto">
            <p className={`${styles.feedback__text} mb-4 md:mb-8`}>
              У меня возник вопрос как поздравить свою административную команду с 8 марта. Мне нужно было что-то необычное, интересное, креативное и содержательное. Я нашла всё это в A2B. Девчонки очень интересно нам
              рассказали о том, что такое современное искусство, как можно его прочитывать и понимать. А совместное творчество вызвало эмоции отличного настроения. Было круто👍
            </p>
            <p className={styles.feedback__person}>Юлия, директор общеобразовательной школы</p>
          </div>
        </section>

        {/* Наша команда */}
        <section id="team" className={`${styles.team} mb-16 md:mb-32`}>
          <div className="container mx-auto flex flex-col px-4 py-16 md:py-32 text-white">
            <h2>КОМАНДА А2Б:</h2>
            {teamAchivments.map((text, index) => (
              <div className={`${styles.team__achivment} mt-8 lg:mt-12 py-12 px-8 lg:px-24 text-black bg-white`} key={index}>
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* КОНТАКТЫ */}
        <section id="contacts" className="container mx-auto grid md:grid-cols-2 gap-4 px-4">
          <div className="my-auto pb-4 md:pb-40 lg:pb-96">
            <h2 className="mb-4">КОНТАКТЫ:</h2>
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
            <p>
              <Link href="mailto:art2.business@yandex.ru">
                <a className="text-blue-600 underline hover:text-blue-700 hover:no-underline">art2.business@yandex.ru</a>
              </Link>
            </p>
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

export default Home;
