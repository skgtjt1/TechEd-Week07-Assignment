import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <h1 className="header-h1">Unofficial User Reviews</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/formpage">Post a review</Link>
          </li>
          <li>
            <Link to="/userreviews">Reviews</Link>
          </li>

          {/* <li>
            <Link to="/">Expansion Info</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
