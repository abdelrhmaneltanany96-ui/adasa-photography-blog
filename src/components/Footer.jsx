import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <h2>📸 Adasa</h2>
          <p>
            Discover the art of photography through
            inspiring stories, creative ideas, and
            professional tips.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        {/* About */}
        <div className="footer-about">
          <h3>About Adasa</h3>
          <p>
            A creative space for photography lovers
            to learn, explore, and get inspired.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Adasa.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}








/*
 * Reusable Footer Component
 *
 * Component Reusability:
 * - Create a component once.
 * - Reuse it across multiple pages.
 *
 * Shared Layout:
 * - Navbar and Footer are placed outside Routes.
 * - They remain visible while page content changes.
 *
 * React Router Link:
 * - Enables navigation without a full page reload.
 *
 * Dynamic Year:
 * - new Date().getFullYear() returns the current year.
 * - Keeps the copyright year updated automatically.
 */