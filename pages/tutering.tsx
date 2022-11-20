import type { NextPage } from "next";
import { GraphQLClient, gql } from "graphql-request";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DynamicForm = dynamic(() => import("../components/Form"), {
  suspense: true,
});
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

const Home: NextPage<IPage> = ({ servicePage }: IPage) => {
  return (
    <>
      <Head>
        <title>{servicePage.seo.title}</title>
        <meta name="description" content={servicePage.seo.description} />
        <link rel="canonical" href="https://www.art2business.ru/" />
      </Head>

      <Layout>
        {/* Навигация десктоп */}
        <Nav />

        {/* ТИМБИЛДИНГ */}
        <section className={`${styles.teambuilding} pt-16`}>
          <div className="lg:container mx-auto px-16 xl:px-4 pb-8 md:pb-16">
            <div className="my-10">
              <h1 className="service__title">{servicePage.title}</h1>
              <p>{servicePage.description}</p>
            </div>
          </div>

          <div className={styles.teambuilding__about}>
            <div className="lg:container lg:mx-auto lg:py-16 relative z-10">
              <div className="lg:grid grid-cols-2 gap-32 lg:px-8 xl:px-4">
                <div className={`${styles.teambuilding__about__first} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                  <h3 className="mb-4">Что это?</h3>
                  <div className="mb-16 lg:mb-32" dangerouslySetInnerHTML={{ __html: servicePage.what.html }} />
                  <Image src={more2Pic} width={208} height={200} placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
                </div>
                <div className={`${styles.teambuilding__about__second} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                  <h3 className="mb-4">Что мы будем делать?</h3>
                  <div className="mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: servicePage.how.html }} />
                  <div className="text-right">
                    <Image src={more3Pic} width={161} height={288} placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
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
              <div className="mb-4" dangerouslySetInnerHTML={{ __html: servicePage.price.html }} />
              <Suspense fallback={`Загрузка формы...`}>
                <DynamicForm />
              </Suspense>
            </div>
            <div>
              <div className="w-1/4 lg:w-full xl:w-1/2 ml-auto">
                <Image src={more4Pic} width={326} height={700} placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const hygraph = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/cl591wrec5kb801um1xjoe5g8/master");

  const { servicePage } = await hygraph.request(
    gql`
      {
        servicePage(where: { id: "clamhisvckuti0aulz17zi2oi" }) {
          seo {
            title
            description
          }
          title
          description
          what {
            html
          }
          how {
            html
          }
          price {
            html
          }
        }
      }
    `
  );

  return {
    props: {
      servicePage,
    },
  };
}

type TRithText = {
  html: string;
};
interface IPage {
  servicePage: {
    seo: {
      title: string;
      description: string;
    };
    title: string;
    description: string;
    what: TRithText;
    how: TRithText;
    price: TRithText;
  };
}

export default Home;
