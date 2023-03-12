import { sampleCategories } from "~/helpers/misc";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getSidebarData: publicProcedure.query(() => {
    const data = new Map<string, string[]>();
    sampleCategories.map((category) => {
      data.set(category, ["Subcategory 1", "Subcategory 2", "Subcategory 3"]);
    });

    return data;
  }),
});
