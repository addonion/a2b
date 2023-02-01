import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import contactsPic from "../../images/contacts.png";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <section id="contacts" className="container mx-auto grid lg:grid-cols-2 gap-4 px-8 xl:px-4 py-16 md:py-32">
      <div className="my-auto pb-4 lg:pb-16">
        <h2 className="mb-4">Контакты:</h2>
        <p>
          <Link href="https://t.me/nebutyav" target="_blank" className="text-blue-600 underline hover:text-blue-700 hover:no-underline">
            telegram
          </Link>
        </p>
        <p>
          <Link href="mailto:art2.business@yandex.ru" className="text-blue-600 underline hover:text-blue-700 hover:no-underline">
            art2.business@yandex.ru
          </Link>
        </p>
        <p className="mb-1">+7 (951) 942-82-85 — Лейла,</p>
        <p className="mb-1">+7 (912) 58-66-212 — Анастасия,</p>

        <h3 className="mt-6 lg:mt-12">А еще мы:</h3>
        <ul className={styles.contacts__more}>
          <li>Разрабатываем креативные концепции для бизнеса;</li>
          <li>Проводим мероприятия;</li>
          <li>Тренируем креативное мышление;</li>
          <li>Помогаем понять современное искусство.</li>
        </ul>
      </div>
      {/* <div className={styles.contacts__pic}>
        <div className="pb-3">
          <Image src={contactsPic} width={744} height={1062} alt="КОНТАКТЫ" />
        </div>
      </div> */}
    </section>
  );
};

export default Contacts;
