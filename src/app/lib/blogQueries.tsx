// lib/blogQueries.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getFilteredBlogs(filter: any = {}) {
  const queryOptions: any = { include: { category: true } };

  if (filter.category) {
    queryOptions["where"] = { category: { title: filter.category } };
  }

  const blogs = await prisma.blog.findMany(queryOptions);

  return blogs;
}

export async function getBlogBySlug(slug: String) {
  const queryOptions: any = { where: { slug } };

  const blogs = await prisma.blog.findUnique(queryOptions);

  return blogs;
}
