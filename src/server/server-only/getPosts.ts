import "server-only";

import { example_posts } from "../db/schema";
import { db } from "../db";

export const getPosts = async () => {
  const posts = await db.select().from(example_posts);
  return posts;
};
