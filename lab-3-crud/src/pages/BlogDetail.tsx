import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import toast from "react-hot-toast";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useBlog();

  const post = state.posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found.</div>;
  }

  const handleDelete = () => {
    dispatch({ type: "DELETE_POST", payload: id! });
    toast.success("Post deleted successfully");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <span
            className={`px-3 py-1 rounded ${
              post.published
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {post.published ? "Published" : "Draft"}
          </span>
        </div>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => navigate(`/blog/edit/${id}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
