// Importing necessary modules and components from React Router
import { Link, useLocation } from "react-router-dom";

// Functional component for navigation tabs
function NavTabs() {
  // Getting the current page location using useLocation hook
  const currentPage = useLocation().pathname;
  // Rendering navigation tabs
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li>
          <Link
            to="/"
            // Conditional class based on the current page
            // If current page is 'Home', set class to 'nav-link-active', else set to 'nav-link'
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/Portfolio"
            // Conditional class based on the current page
            // If current page is 'Portfolio', set class to 'nav-link-active', else set to 'nav-link'
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/Resume"
            // Conditional class based on the current page
            // If current page is 'Resume', set class to 'nav-link-active', else set to 'nav-link'
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            // Conditional class based on the current page
            // If current page is 'Contact', set class to 'nav-link-active', else set to 'nav-link'
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
