import type { NextPage } from "next";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Main.module.scss";

// Images
import heroPic from "../images/hero.png";
import heroPicMobile from "../images/hero--mobile.png";
import teambuildingPic from "../images/teambuilding.png";
import feedbackPic from "../images/feedback.png";
import contactsPic from "../images/contacts.png";

const menuItems: [string, string][] = [
  ["Тимбилдинг", "#teambuilding"],
  ["Цена", "#price"],
  ["А ещё мы…", "#more"],
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
              <div className="md:hidden">
                <Image src={heroPicMobile} width={100} height={100} priority={true} placeholder="blur" alt="Art2Buisness Logo" />
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
        <section id="teambuilding" className="container mx-auto flex flex-col px-4 py-32 md:py-64">
          <div>
            <Image src={teambuildingPic} width={1504} height={601} placeholder="blur" alt="ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ" />
          </div>
          <h2 className="mt-10">ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ</h2>
        </section>

        {/* Отзыв */}
        <section className={`${styles.feedback} container mx-auto px-4 py-16 md:py-32 md:grid md:grid-cols-3 md:gap-10 lg:gap-32`}>
          <div className="w-1/2 mb-8 md:w-full md:col-span-1 md:mb-0">
            <div>
              <Image src={feedbackPic} width={426} height={535} layout="responsive" placeholder="blur" alt="Татьяна Ивановна, учитель школы №42" />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 my-auto">
            <p className={`${styles.feedback__text} mb-4 md:mb-8`}>
              «Мы проходили тимбилдинг с коллегами-учителями, после этого атмосфера в коллектисе стала просто чудесной! Я знаю, что могу положиться на своих товарищей по работе и могу поделиться с ними своими
              переживаниями об учениках»
            </p>
            <p className={styles.feedback__person}>Татьяна Ивановна, учитель школы №42</p>
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
            <h2 className="mb-2">КОНТАКТЫ:</h2>
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
