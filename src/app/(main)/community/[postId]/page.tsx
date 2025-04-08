import { getPostById } from "@/lib/api/posts";
import { PostCard } from "@/components/posts/PostCard";
import { CommentCard } from "@/components/posts/CommentCard";
import { AddCommentForm } from "@/components/posts/AddCommentForm";

export default async function PostPage({ params }: { params: { postId: string } }) {
  const post = await getPostById(params.postId);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <PostCard post={post} />

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">التعليقات ({post.comments.length})</h3>

        <AddCommentForm postId={post.id} />

        <div className="mt-4 space-y-3">
          {post.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
