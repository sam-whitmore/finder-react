import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  organisations: defineTable({
    about: v.array(v.string()),
    locations: v.array(v.string()),
    logo: v.string(),
    name: v.string(),
    sector: v.string(),
    size: v.float64(),
  }),
});