import Nav from "@/components/Nav";
import Image from "next/image";
import Blocks from "editorjs-blocks-react-renderer";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DynamicForm = dynamic(() => import("../../components/Form"), {
  suspense: true,
});

// Типограф
import Typograf from "typograf";
const tp = new Typograf({ locale: ["ru", "en-US"] });
tp.enableRule("ru/nbsp/*"); // Включить все правила

// Стили
import styles from "./styles.module.scss";

// Images
import more2Pic from "../../images/more2.png";
import more3Pic from "../../images/more3.png";
import more4Pic from "../../images/more4.png";
import feedbackPic from "../../images/feedback.png";

type TPages = { attributes: { Slug: string } };
type TPage = { slug: string };

export async function generateStaticParams() {
  const res = await fetch(`https://server.art2business.ru/api/services?fields=slug`).then((res) => res.json());
  return res.data.map((page: TPages) => ({
    slug: page.attributes.Slug,
  }));
}

async function fetchPost(params: TPage) {
  const res = await fetch(`https://server.art2business.ru/api/services?filters[Slug][$eq]=${params.slug}&populate=*`);
  const data = await res.json();
  return data;
}

export default async function Post({ params }: { params: TPage }) {
  const { data } = await fetchPost(params);
  const page = data[0].attributes;
  return (
    <>
      {/* Навигация десктоп */}
      <Nav />

      <section id="teambuilding" className={`${styles.teambuilding} pt-16 `}>
        {/* Заголовок и Описание */}
        <div className="lg:container mx-auto px-8 xl:px-4 pb-8 md:pb-16">
          <div className="my-10">
            <h1 className="service__title" dangerouslySetInnerHTML={{ __html: tp.execute(page.Title) }} />
            <p dangerouslySetInnerHTML={{ __html: tp.execute(page.Description) }} />
          </div>
        </div>

        {/* Что да как */}
        <div className={styles.teambuilding__about}>
          <div className="lg:container lg:mx-auto lg:py-16 relative z-10">
            <div className="lg:grid grid-cols-2 gap-32 lg:px-8 xl:px-4">
              <div className={`${styles.teambuilding__about__first} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                <h3 className="mb-4">Что это?</h3>
                <div className="mb-16 lg:mb-32">
                  <Blocks data={JSON.parse(page.What)} />
                </div>
                <Image src={more2Pic} width={208} height={200} alt="Пьеро Мандзони, Дерьмо художника" />
              </div>
              <div className={`${styles.teambuilding__about__second} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                <h3 className="mb-4">Что мы будем делать?</h3>
                <div className="mb-8 lg:mb-12">
                  <Blocks data={JSON.parse(page.How)} />
                </div>
                <div className="text-right">
                  <Image src={more3Pic} width={161} height={288} alt="Пьеро Мандзони, Дерьмо художника" />
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
            <div className="mb-4">
              <Blocks data={JSON.parse(page.Price)} />
            </div>
            {/* <Suspense fallback={`Загрузка формы...`}>
              <DynamicForm />
            </Suspense> */}
          </div>
          <div>
            <div className="w-1/4 lg:w-full xl:w-1/2 ml-auto">
              <Image src={more4Pic} width={326} height={700} alt="Пьеро Мандзони, Дерьмо художника" />
            </div>
          </div>
        </div>
      </section>

      {/* Отзыв */}
      <section className={`${styles.feedback} container mx-auto px-8 xl:px-4 py-16 md:py-32 lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-32`}>
        <div className="w-2/3 mb-8 lg:w-full lg:col-span-1 lg:mb-0">
          <div>
            <Image src={feedbackPic} width={426} height={535} alt="Юлия, директор общеобразовательной школы" />
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 my-auto">
          <div className={`${styles.feedback__text} mb-4`}>
            «У меня возник вопрос как поздравить свою административную команду с 8 марта. Девчонки рассказали что такое современное искусство, как можно его прочитывать и понимать. А совместное творчество вызвало эмоции
            отличного настроения. Было круто!»
          </div>
          <p className="text-gray-400">Юлия, директор общеобразовательной школы</p>
        </div>
      </section>
    </>
  );
}
