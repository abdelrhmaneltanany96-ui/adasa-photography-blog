import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import BlogCard from "../components/BlogCard";

export default function BlogDetails() {
  const { id } = useParams();

  // Find the selected blog
  const post = blogsData.posts.find(
    (post) => post.id === Number(id)
  );

  // Handle invalid blog ID
  if (!post) {
    return (
      <main className="editorial-not-found container">
        <h1>Blog Not Found</h1>
        <p>Sorry, the article you're looking for doesn't exist.</p>
        <Link to="/blogs">Explore Blogs →</Link>
      </main>
    );
  }

  // Split article content into blocks
  const contentBlocks = post.content.split(/\n\s*\n/);

  // Get 3 related blogs from the same category
  const relatedPosts = blogsData.posts
    .filter(
      (item) =>
        item.category === post.category &&
        item.id !== post.id
    )
    .slice(0, 3);

  return (
    <main className="editorial-page">

      {/* Article Header */}
      <section className="editorial-header container">
        <Link to="/blogs" className="editorial-back">
          ← Back to Blogs
        </Link>

        <div className="editorial-heading" dir="rtl">
          <span className="editorial-category">
            {post.category}
          </span>

          <h1>{post.title}</h1>

          <p>{post.excerpt}</p>

          <div className="editorial-header-meta">
            <span>📅 {post.date}</span>
            <span>⏱️ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="editorial-image-section container">
        <img
          src={post.image}
          alt={post.title}
          className="editorial-hero-image"
        />
      </section>

      {/* Article Body */}
      <section className="editorial-article-section container">
        <div className="editorial-article-card">

          {/* Author Card */}
          <div className="editorial-author" dir="rtl">
            <img
              src={post.author.avatar}
              alt={post.author.name}
            />

            <div>
              <h3>{post.author.name}</h3>
              <p>{post.author.role}</p>
            </div>

            <span className="editorial-author-label">
              كاتب المقال
            </span>
          </div>

          {/* Article Content */}
          <article className="editorial-content" dir="rtl">
            {contentBlocks.map((block, index) => {
              const text = block.trim();

              if (text.startsWith("### ")) {
                return (
                  <h3 key={index}>
                    {text.slice(4)}
                  </h3>
                );
              }

              if (text.startsWith("## ")) {
                return (
                  <h2 key={index}>
                    {text.slice(3)}
                  </h2>
                );
              }

              return <p key={index}>{text}</p>;
            })}
          </article>

          {/* Tags */}
          <div className="editorial-tags" dir="rtl">
            <h3>الوسوم</h3>

            <div className="editorial-tags-list">
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Related Blogs */}
      {relatedPosts.length > 0 && (
        <section className="editorial-related">
          <div className="container">

            <div className="editorial-related-heading">
              <div>
                <span>KEEP EXPLORING</span>
                <h2>Related Blogs</h2>
                <p>More photography stories you might enjoy.</p>
              </div>

              <Link to="/blogs">View All Blogs →</Link>
            </div>

            <div className="blogs-grid">
              {relatedPosts.map((item) => (
                <BlogCard key={item.id} post={item} />
              ))}
            </div>

          </div>
        </section>
      )}

    </main>
  );
}






// | find()                                       | filter() 

// | بترجع|                       أول عنصر مطابق بترجع Array بكل العناصر المطابقة |
// | لو ملقتش بترجع `undefined`                  | لو ملقتش بترجع `[]` |




/*
 * Dynamic Routing & useParams
 *
 * Dynamic Route:
 * - Uses URL parameters such as :id.
 * - Allows one component to display different content.
 *
 * useParams():
 * - A React Router hook.
 * - Returns an object containing URL parameters.
 * - Parameter values are strings.
 *
 * Array.find():
 * - Returns the first element matching a condition.
 * - Returns undefined if no match is found.
 *
 * Conditional Rendering:
 * - Displays different JSX based on a condition.
 * - Helps handle missing or invalid data.
 */