import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = ({ item }: any) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Ammar here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={item.image} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{item.title}</h1>
          <p className={styles.postDesc}>
            Singapore is a lively and exciting city which is both classy and
            cosmopolitan in addition to hot and slightly naughty. This dynamic
            character can be utilized to refer to The Scarlet Singapore, an
            80-room mischievous ultra-posh resort in Lion City. Scarlet is the
            property’s muse and fictional character —think about a maid in
            fishnets, stilettos, and a garter belt.
          </p>
          <button className={styles.button}>
            <Link href={`/post/${item.slug}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
