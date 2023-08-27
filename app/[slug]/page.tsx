import Nav from "@/components/Nav";
import Image from "next/image";

// Типограф
import Typograf from "typograf";
const tp = new Typograf({ locale: ["ru", "en-US"] });
tp.enableRule("ru/nbsp/*"); // Включить все правила

// Стили
import styles from "./styles.module.scss";

// Images
import teamLeila from "../../images/team_leila.png";
import Contacts from "@/components/Contacts";

// Page atributes
type TPages = { attributes: { Slug: string } };
type TPage = { slug: string };
type Feedback = {
  id: number;
  attributes: {
    name: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

// Head
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

      <section id="teambuilding" className={`${styles.teambuilding} pt-8 lg:pt-16 `}>
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
              </div>
              <div className={`${styles.teambuilding__about__second} flex flex-col px-8 md:px-16 lg:px-0 py-16 lg:py-0`}>
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: tp.execute(data[0].attributes.rightColumn) }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Нижний блок */}
      <section id="price" className={`${styles.price} `}>
        <div className="container mx-auto lg:grid xl:grid-cols-3 xl:gap-8 px-8 xl:px-4 py-16 md:py-32">
          <div className="xl:col-span-2">
            <div className="mb-4" dangerouslySetInnerHTML={{ __html: tp.execute(data[0].attributes.Bottom) }} />
          </div>
          <div className="flex xl:col-span-1">
            <Image src={teamLeila} width={680} height={688} alt="Лейла" className="mt-auto" />
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className={`${styles.feedback} container mx-auto px-8 xl:px-4`}>
        <h2 className="mb-4">Отзывы:</h2>
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          {page.feedbacks.data.map((feedback: Feedback) => (
            <div key={feedback.id} className="lg:col-span-1">
              <div className={`${styles.feedback__text} shadow-xl px-4 py-6`}>
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: tp.execute(feedback.attributes.text) }} />
                <div className="text-gray-400" dangerouslySetInnerHTML={{ __html: tp.execute(feedback.attributes.name) }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <Contacts />
    </>
  );
}

// Адреса страниц
export async function generateStaticParams() {
  const res = await fetch(`https://server.art2business.ru/api/services?fields=slug`).then((res) => res.json());
  return res.data.map((page: TPages) => ({
    slug: page.attributes.Slug,
  }));
}

// Данные для страницы
async function fetchPost(params: TPage) {
  const res = await fetch(`https://server.art2business.ru/api/services?filters[Slug][$eq]=${params.slug}&populate=seo,feedbacks`);
  const data = await res.json();
  return data;
}
