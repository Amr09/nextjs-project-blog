import Link from "next/link";
import Styles from "./page.module.css";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import { getFilteredBlogs } from "./lib/blogQueries";

export default async function Home() {
  const blogs = await getFilteredBlogs();
  
  return (
    <div className={Styles.container}>
      {blogs.length > 0 && <Featured item={blogs[4]} />}
      <CategoryList />
      <div className={Styles.content}>
        <CardList items={blogs} />
      </div>
    </div>
  );
}
