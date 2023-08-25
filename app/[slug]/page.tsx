import Nav from "@/components/Nav";
import Image from "next/image";

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

// Адреса страниц
export async function generateStaticParams() {
  const res = await fetch(`https://server.art2business.ru/api/services?fields=slug`).then((res) => res.json());
  return res.data.map((page: TPages) => ({
    slug: page.attributes.Slug,
  }));
}

// Данные для страницы
async function fetchPost(params: TPage) {
  const res = await fetch(`https://server.art2business.ru/api/services?filters[Slug][$eq]=${params.slug}&populate=seo`);
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }: { params: TPage }) {
  const { data } = await fetchPost(params);
  const page = data[0].attributes;

  return {
    title: page.seo.metaTitle,
    description: page.seo.metaDescription,
    alternates: {
      canonical: `https://www.art2business.ru/${params.slug}/`,
    },
  };
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
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: tp.execute(data[0].attributes.leftColumn) }} />
                <Image src={more2Pic} width={208} height={200} alt="Пьеро Мандзони, Дерьмо художника" />
              </div>
              <div className={`${styles.teambuilding__about__second} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: tp.execute(data[0].attributes.rightColumn) }} />
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
            <div className="mb-4" dangerouslySetInnerHTML={{ __html: tp.execute(data[0].attributes.Bottom) }} />
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
