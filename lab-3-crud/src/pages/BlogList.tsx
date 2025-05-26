import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const BlogList = () => {
  const { state } = useBlog();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link
          to="/blog/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Post
        </Link>
      </div>
      <div className="grid gap-4">
        {state.posts.map((post) => (
          <div
            key={post.id}
            className="border p-4 rounded shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">
              {post.content.substring(0, 150)}...
            </p>
            <div className="flex justify-between items-center">
              <span
                className={`px-2 py-1 rounded ${
                  post.published
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {post.published ? "Published" : "Draft"}
              </span>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
