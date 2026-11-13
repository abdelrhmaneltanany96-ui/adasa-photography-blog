import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-label">
          OOPS! PAGE NOT FOUND
        </span>

        <h1>404</h1>

        <h2>Looks Like This Shot Is Missing!</h2>

        <p>
          The page you're looking for might have been moved,
          deleted, or never existed.
          Let's get you back to capturing great moments.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-home">
            ← Back to Home
          </Link>

          <Link to="/blogs" className="not-found-blogs">
            Explore Blogs →
          </Link>
        </div>
      </div>
    </main>
  );
}

