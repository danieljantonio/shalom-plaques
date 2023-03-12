import { sampleCategories } from "~/helpers/misc";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { ICategory } from "~/utils/dto";

export const productRouter = createTRPCRouter({
  getSidebarData: publicProcedure.query(async () => {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`)
    ).json();

    return { categories: data.categories as ICategory[] };
  }),
});
