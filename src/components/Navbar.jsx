import { Link, NavLink } from "react-router-dom";
// NavLink to add class active
// Link to route
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">

        <Link to="/" className="logo">
          📸 Adasa
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/blogs">
            Blogs
          </NavLink>
        </div>

      </div>
    </nav>
  );
}




/*
 * React Router - Link & NavLink
 *
 * Link:
 * - Used to navigate between routes without a full page reload.
 * - Uses the "to" prop to specify the destination.
 *
 * NavLink:
 * - Works like Link but provides active route styling.
 * - Automatically adds the "active" class when matched.
 * - Useful for navigation menus.
 *
 * end:
 * - Ensures the NavLink matches the exact destination path.
 * - Commonly used with the Home route ("/").
 *
 * Shared Components:
 * - Components placed outside <Routes> remain visible
 *   across different pages.
 */

