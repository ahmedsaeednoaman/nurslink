// src/app/(main)/community/page.tsx

import { AddPostForm } from "./_components/AddPostForm";
import { PostCard } from "./_components/PostCard";
import { getPosts } from "@/lib/api/posts";

export default async function CommunityPage() {
  const posts = await getPosts(); // جلب المنشورات من الخادم

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">مجتمع الممرضين</h1>

      <AddPostForm />

      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
