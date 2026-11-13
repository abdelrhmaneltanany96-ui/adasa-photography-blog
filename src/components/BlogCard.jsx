import { Link } from "react-router-dom";


// post from {} blogs.json
export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <img
        src={post.image}
        alt={post.title}
        // for style in index.css
        className="blog-card-image"
      />

      <div className="blog-card-content">
        <span className="blog-category">
          {post.category}
        </span>

        <h2>{post.title}</h2>

        <p>{post.excerpt}</p>

        <div className="blog-card-footer">
          <span>{post.readTime}</span>

          <Link to={`/blogs/${post.id}`}>
            اقرأ المزيد ←
          </Link>
        </div>
      </div>
    </article>
  );
}

