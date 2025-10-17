"use server";

import { getPosts } from "../server-only/getPosts";

export const getPostsAction = async () => await getPosts();
