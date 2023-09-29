import { NextResponse } from "next/server";
import { getAllCategories } from "../../lib/categoryQueries";

export const GET = async () => {
  try {
    const categories = await getAllCategories();

    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
