import { type Config } from "drizzle-kit";
import { PROJECT_PREFIX } from "./src/server/db/schema";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
  // https://orm.drizzle.team/docs/goodies#multi-project-schema
  tablesFilter: [`${PROJECT_PREFIX}_*`],
} satisfies Config;
