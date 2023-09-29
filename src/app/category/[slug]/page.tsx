import CardList from "../../components/cardList/CardList";
import { getFilteredBlogs } from "../../lib/blogQueries";

export default async function Category({ params }: any) {
  const { slug } = params;
  console.log(slug);
  const blogs = await getFilteredBlogs({ category: slug });

  return (
    <div>
      <h1 className="mt-8 text-indigo-500">{slug}</h1>
      <CardList items={blogs} />
    </div>
  );
}
