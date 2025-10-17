"use client";
import { useQuery } from "@tanstack/react-query";

import { getPostsAction } from "@/server/actions/getPostsAction";

export function Posts() {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => await getPostsAction(),
    // Optional: refetch every 30 seconds
    refetchInterval: 30000,
  });

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="animate-pulse">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error: {error instanceof Error ? error.message : "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-bold">Posts</h2>
        {isFetching && (
          <span className="text-sm text-gray-500 animate-pulse">
            Updating...
          </span>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {data?.slice(0, 5).map((post) => (
          <p key={post.id} className="mb-2">
            {post.name}
          </p>
        ))}
      </div>
    </div>
  );
}
