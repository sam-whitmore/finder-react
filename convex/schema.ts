import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema =  defineSchema({
  ...authTables,
  organisations: defineTable({
    about: v.array(v.string()),
    locations: v.array(v.string()),
    logo: v.string(),
    name: v.string(),
    sector: v.string(),
    size: v.float64(),
  }),
});
 
export default schema;