import { getBlogBySlug } from "../../lib/blogQueries";
import styles from "./singlePage.module.css";
import Image from "next/image";

export default async function Category({ params }: any) {
  const { slug } = params;
  const blog: any = await getBlogBySlug(slug);

  return (
    <div className={`mt-8 ${styles.container}`}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{blog.title}</h1>
        </div>
        {blog.image && (
          <div className={styles.imageContainer}>
            <Image src={blog.image} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} />
          {blog.body}
        </div>
      </div>
    </div>
  );
}
