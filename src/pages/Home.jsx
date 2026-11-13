import { Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import BlogCard from "../components/BlogCard";

export default function Home() {
  // Get only 3 featured posts
  // ال blogs اللي هتتعرض في ال home page
  const featuredPosts = blogsData.posts
    .filter((post) => post.featured)
    .slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container hero-content">
          <span className="hero-badge">
            📸 Welcome to Adasa
          </span>

          <h1>
            Capture Moments.
            <br />
            Tell Stories.
          </h1>

          <p>
            Explore the world of photography through
            inspiring stories, creative techniques,
            and professional tips.
          </p>

          <Link to="/blogs" className="hero-btn">
            Explore Blogs →
          </Link>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">
                HANDPICKED STORIES
              </span>

              <h2>Featured Blogs</h2>

              <p>
                Discover our most inspiring photography stories.
              </p>
            </div>

            <Link to="/blogs" className="view-all-link">
              View All Blogs →
            </Link>
          </div>

          <div className="blogs-grid">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore-section">
        <div className="container explore-content">
          <span>YOUR NEXT SHOT STARTS HERE</span>

          <h2>Ready to Improve Your Photography?</h2>

          <p>
            Discover practical tips, creative ideas,
            and stories that will inspire your next shot.
          </p>

          <Link to="/blogs" className="explore-btn">
            Start Exploring →
          </Link>
        </div>
      </section>
    </main>
  );
}

