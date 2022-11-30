import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

import photo1 from "../../images/gallery/photo1.jpg";
import photo2 from "../../images/gallery/photo2.jpg";
import photo3 from "../../images/gallery/photo3.jpg";
import photo4 from "../../images/gallery/photo4.jpg";
import photo5 from "../../images/gallery/photo5.jpg";
import photo6 from "../../images/gallery/photo6.jpg";
import photo7 from "../../images/gallery/photo7.jpg";
import photo8 from "../../images/gallery/photo8.jpg";
import photo9 from "../../images/gallery/photo9.jpg";

export default function Gallery(): JSX.Element {
  return (
    <section>
      <div className={styles.gallery}>
        <div className="flex">
          <div>
            <Image src={photo4} placeholder="blur" alt="Фото 4" height={800} />
          </div>

          <div>
            <Image src={photo3} placeholder="blur" alt="Фото 3" height={800} />
          </div>

          <div>
            <Image src={photo7} placeholder="blur" alt="Фото 7" height={800} />
          </div>

          <div>
            <Image src={photo1} placeholder="blur" alt="Фото 1" height={800} />
          </div>

          <div>
            <Image src={photo5} placeholder="blur" alt="Фото 5" height={800} />
          </div>

          <div>
            <Image src={photo6} placeholder="blur" alt="Фото 6" height={800} />
          </div>

          <div>
            <Image src={photo8} placeholder="blur" alt="Фото 8" height={800} />
          </div>

          <div>
            <Image src={photo9} placeholder="blur" alt="Фото 9" height={800} />
          </div>

          <div>
            <Image src={photo2} placeholder="blur" alt="Фото 2" height={800} />
          </div>
        </div>
      </div>
    </section>
  );
}
