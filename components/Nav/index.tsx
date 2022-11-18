import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav(): JSX.Element {
  useEffect(() => {
    // Фиксируем при прокрутке навигацию
    let navigationPosition = document.getElementById("Navigation")!.offsetTop;
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > navigationPosition) {
        document.getElementById("Navigation")?.classList.add(styles.sticky);
        if (window.pageYOffset > navigationPosition + 20) {
          document.getElementById("Navigation")?.classList.remove("py-2");
        }
      } else {
        document.getElementById("Navigation")?.classList.remove(styles.sticky);
        document.getElementById("Navigation")?.classList.add("py-2");
      }
    });
  }, []);

  return (
    <nav id="Navigation" className={`${styles.navigation} hidden lg:block py-2`}>
      <div className="container mx-auto flex px-8 xl:px-4">
        {[
          ["a2b", "/"],
          ["Тьюторство", "/tutoring/"],
          ["Тимбилдинг", "/team-building/"],
          ["Цена", "/#price"],
          ["Наша команда", "/#team"],
          ["Контакты", "/#contacts"],
        ].map(([title, url]) => (
          <Link href={url} key={url} className={`${styles.navigation__link} pr-16 py-2 last:pr-0`}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
