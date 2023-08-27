"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Hamburger from "hamburger-react";

const Nav = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // Фиксируем при прокрутке навигацию
    let navigationPosition = document.getElementById("Navigation")!.offsetTop;
    window.addEventListener("scroll", function () {
      if (window.scrollY > navigationPosition) {
        document.getElementById("Navigation")?.classList.add(styles.sticky);
        if (window.scrollY > navigationPosition + 20) {
          document.getElementById("Navigation")?.classList.remove("md:py-2");
        }
      } else {
        document.getElementById("Navigation")?.classList.remove(styles.sticky);
        document.getElementById("Navigation")?.classList.add("md:py-2");
      }
    });
  });

  return (
    <nav id="Navigation" className={`${styles.navigation} ${isOpen ? "w-full h-full bg-black" : "bg-transparent"} md:py-2`}>
      <div className="container mx-auto px-4 xl:px-4">
        <div className="flex md:hidden">
          <div className="ml-auto py-2">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {[
          ["a2b", "/"],
          ["Арт-медиация", "/art-mediation/"],
          ["Тимбилдинг", "/team-building/"],
          ["Наша команда", "/#team"],
          ["Контакты", "/#contacts"],
        ].map(([title, url]) => (
          <Link href={url} onClick={() => setOpen(false)} key={url} className={`${styles.navigation__link} ${!isOpen ? "hidden" : "block"} md:inline-block pr-8 lg:pr-12 py-2 last:pr-0`}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
