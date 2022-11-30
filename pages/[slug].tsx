import { gql, GraphQLClient } from "graphql-request";
import type { NextPage, GetStaticPaths } from "next";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DynamicForm = dynamic(() => import("../components/Form"), {
  suspense: true,
});
import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.scss";
import Typograf from "typograf";
const tp = new Typograf({ locale: ["ru", "en-US"] });
tp.enableRule("ru/nbsp/*"); // Включить все правила

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
interface IPages {
  slug: string;
}

// Images
import more2Pic from "../images/more2.png";
import more3Pic from "../images/more3.png";
import more4Pic from "../images/more4.png";
import feedbackPic from "../images/feedback.png";

const Page: NextPage<IPage> = ({ servicePage }: IPage) => {
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
        <section id="teambuilding" className={`${styles.teambuilding} pt-16 `}>
          <div className="lg:container mx-auto px-8 xl:px-4 pb-8 md:pb-16">
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
                  <div className="mb-16 lg:mb-32" dangerouslySetInnerHTML={{ __html: tp.execute(servicePage.what.html) }} />
                  <Image src={more2Pic} width={208} height={200} placeholder="blur" alt="Пьеро Мандзони, Дерьмо художника" />
                </div>
                <div className={`${styles.teambuilding__about__second} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                  <h3 className="mb-4">Что мы будем делать?</h3>
                  <div className="mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: tp.execute(servicePage.how.html) }} />
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
              <div className="mb-4" dangerouslySetInnerHTML={{ __html: tp.execute(servicePage.price.html) }} />
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

        {/* Отзыв */}
        <section className={`${styles.feedback} container mx-auto px-8 xl:px-4 py-16 md:py-32 lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-32`}>
          <div className="w-2/3 mb-8 lg:w-full lg:col-span-1 lg:mb-0">
            <div>
              <Image src={feedbackPic} width={426} height={535} placeholder="blur" alt="Юлия, директор общеобразовательной школы" />
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
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const hygraph = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/cl591wrec5kb801um1xjoe5g8/master");
  const { servicePages } = await hygraph.request(
    gql`
      {
        servicePages {
          slug
        }
      }
    `
  );

  const paths = servicePages.map((page: IPages) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }: { params: IPages }) {
  const hygraph = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/cl591wrec5kb801um1xjoe5g8/master");
  const { servicePage } = await hygraph.request(
    gql`
      {
        servicePage(where: { slug: "${params.slug}" }) {
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

export default Page;
