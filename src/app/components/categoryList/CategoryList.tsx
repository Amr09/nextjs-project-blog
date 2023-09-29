import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { getAllCategories } from "../../lib/categoryQueries";

const CategoryList = async () => {
  const categories = await getAllCategories();

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-semibold mb-5">Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map((item: any) => {
          const imagePath = item.image && item.image.split("/").slice(-1)[0];
          return (
            <Link
              href={`/category/${item.slug}`}
              className={`${styles.category} ${styles[item.slug]}`}
              key={item.id}
            >
              {item.image && (
                <Image
                  src={`/${imagePath}`}
                  alt=""
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
