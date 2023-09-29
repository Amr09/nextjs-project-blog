import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.image && (
        <div className={styles.imageContainer}>
          <Image src={item.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.category}>{item.category.title}</span>
        </div>
        <Link href={`/post/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.body.substring(0, 200) }}
        />
        <Link href={`/post/${item.slug}`} className={styles.link}>
          Read More
        </Link>
        <span className={styles.date}>10-11-2022</span>
      </div>
    </div>
  );
};

export default Card;
