import { index, integer, pgTableCreator, timestamp, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const createTable = pgTableCreator((name) => `next-app-template_${name}`);

export const example_posts = createTable(
  "post",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => [
    index("example_name").on(example.name),
  ],
);