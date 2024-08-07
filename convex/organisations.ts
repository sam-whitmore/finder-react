import { query } from "./_generated/server";
import type { Organisation } from "../models/organisations";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("organisations").collect() as Organisation[]
  },
});