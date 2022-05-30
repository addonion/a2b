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
import more2Pic from "../images/more2.png";
import more3Pic from "../images/more3.png";
import more4Pic from "../images/more4.png";
import feedbackPic from "../images/feedback.png";
import contactsPic from "../images/contacts.png";

const menuItems: [string, string][] = [
  ["Тимбилдинг", "#teambuilding"],
  ["Цена", "#price"],
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
              <Image src={heroPic} width={1504} height={657} layout="responsive" priority={true} placeholder="blur" alt="Art2Buisness" />
              <h1 className="w-full xl:w-5/6 mt-5 md:mt-10 xl:mt-16">Мы создаем концепции, мероприятия и образовательные проекты, вдохновляясь современным искусством</h1>
            </div>
          </div>
        </section>

        {/* Навигация десктоп */}
        <nav className={`${styles.navigation} hidden lg:block`}>
          <div className="container mx-auto flex">
            {menuItems.map(([title, url]) => (
              <Link href={url} key={url}>
                <a className={`${styles.navigation__link} pl-4 pr-16 py-8`}>{title}</a>
              </Link>
            ))}
          </div>
        </nav>

        {/* ТИМБИЛДИНГ */}
        <section id="teambuilding" className={`${styles.teambuilding} pt-16 md:pt-32 `}>
          <div className="container mx-auto px-4 pb-16 md:pb-32">
            <div>
              <Image src={teambuildingPic} width={1504} height={601} layout="responsive" placeholder="blur" alt="ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ" />
              <h2 className="my-10">ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ</h2>
            </div>
          </div>

          <div className={styles.teambuilding__about}>
            <div className="container mx-auto py-16 md:py-32 relative z-10">
              <div className="md:grid grid-cols-2 gap-32 px-4">
                <div className="flex flex-col">
                  <h3 className="mb-4">Что это?</h3>
                  <ul className="mb-32">
                    <li className="mb-4">Мероприятие, где современное искусство становится инструментом общения и расслабления;</li>
                    <li>Повод заняться творчеством в комфортной обстановке.</li>
                  </ul>
                  <Image src={more2Pic} width={208} height={200} layout="fixed" placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
                </div>
                <div>
                  <h3 className="mb-4">Что мы будем делать?</h3>
                  <ul className="mb-12">
                    <li className="mb-4">Познакомимся с работами современных художников и научимся их интерпретировать;</li>
                    <li>Вместе создадим концептуальный арт-объект или поп-ап выставку.</li>
                  </ul>
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
          <div className="container mx-auto lg:grid lg:grid-cols-2 lg:gap-32 px-4 py-32 lg:py-64">
            <div>
              <h2 className="mb-4">ЦЕНА:</h2>
              <ul className={`${styles.price__list} mb-8`}>
                <li>Продолжительность: 1,5 — 2 часа;</li>
                <li>Количество участников: до 30 человек;</li>
                <li>Место: ваш офис или коворкинг в центре города;</li>
                <li>Цена: 1000₽ с человека + (опционально) аренда помещения.</li>
              </ul>

              <Form />
            </div>
            <div className="text-right">
              <Image src={more4Pic} width={326} height={700} layout="fixed" placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
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
            <div className={`${styles.feedback__text} mb-4`}>
              «У меня возник вопрос как поздравить свою административную команду с 8 марта. Девчонки рассказали что такое современное искусство, как можно его прочитывать и понимать. А совместное творчество вызвало
              эмоции отличного настроения. Было круто!»
            </div>
            <p>Юлия, директор общеобразовательной школы</p>
          </div>
        </section>

        {/* Наша команда */}
        <section id="team" className={`${styles.team} mb-16 md:mb-32`}>
          <div className="container mx-auto flex flex-col px-4 py-16 md:py-32 text-white">
            <h2>КОМАНДА А2Б:</h2>
            {teamAchivments.map((text, index) => (
              <div className={`${styles.team__achivment} mt-8 lg:mt-12 py-12 px-8 lg:px-32 xl:px-64 text-black bg-white`} key={index}>
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
            <p className="mb-12">
              <Link href="mailto:art2.business@yandex.ru">
                <a className="text-blue-600 underline hover:text-blue-700 hover:no-underline">art2.business@yandex.ru</a>
              </Link>
            </p>
            <p>А еще мы:</p>
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

export default Home;
