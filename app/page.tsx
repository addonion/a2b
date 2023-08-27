import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";
import Nav from "@/components/Nav";

import Image from "next/image";
import styles from "./page.module.scss";

// Типограф
import Typograf from "typograf";
const tp = new Typograf({ locale: ["ru", "en-US"] });
tp.enableRule("ru/nbsp/*"); // Включить все правила

// Images
import heroPic from "../images/hero.png";
import teambuildingPic from "../images/teambuilding.png";
import teamNastya from "../images/team_nastya.png";
import teamLeila from "../images/team_leila.png";

type TSkill = {
  id: string;
  type: string;
  Text: string;
};

export async function generateMetadata() {
  const { data } = await getData();
  const page = data.attributes;

  return {
    title: page.seo.metaTitle,
    description: page.seo.metaDescription,
    alternates: {
      canonical: "https://www.art2business.ru/",
    },
  };
}

export default async function Home() {
  const { data } = await getData();
  const page = data.attributes;
  const team = data.attributes.Team;

  return (
    <>
      {/* Hero */}
      <section className={`${styles.hero} py-32 lg:py-16`}>
        <div className="container mx-auto flex flex-col h-full px-8 xl:px-4">
          <div className="my-auto md:mb-0">
            <Image src={heroPic} width={1504} height={657} priority={true} alt="Art2Buisness" />
            <h1 className="w-full mt-5 md:mt-10 xl:mt-16">{page.Title}</h1>
          </div>
        </div>
      </section>

      {/* Навигация десктоп */}
      <Nav />

      <div className="container mx-auto px-8 xl:px-4 py-8 md:py-16 xl:py-32">
        <div>
          <Image src={teambuildingPic} width={1504} height={601} alt="ТИМБИЛДИНГ С СОВРЕМЕННЫМ ИСКУССТВОМ" />
        </div>
      </div>

      {/* Наша команда */}
      <section id="team" className={`${styles.team}`}>
        <div className="container mx-auto flex flex-col px-8 xl:px-4 py-16 md:py-32 text-white">
          <h2 className="mb-8">Команда а2б:</h2>

          <div className="grid grid-cols-2 gap-16 xl:gap-32">
            <div>
              <Image src={teamNastya} width={663} height={668} alt="Анастасия" />
            </div>
            <div>
              <Image src={teamLeila} width={680} height={688} alt="Анастасия" />
            </div>
          </div>

          {team.map((skill: TSkill) => (
            <div className={`${styles.team__achivment} mt-8 lg:mt-12 p-6 md:py-12 md:px-8 lg:px-32 xl:px-32 text-black bg-white`} key={skill.id} dangerouslySetInnerHTML={{ __html: tp.execute(skill.Text) }} />
          ))}
        </div>
      </section>

      {/* Фото */}
      <Gallery />

      {/* КОНТАКТЫ */}
      <Contacts />
    </>
  );
}

async function getData() {
  const res = await fetch("https://server.art2business.ru/api/main?populate=*");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
