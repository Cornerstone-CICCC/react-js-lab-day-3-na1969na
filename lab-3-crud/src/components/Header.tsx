import { memo } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  firstname: string;
}

const Header = memo(({ firstname }: HeaderProps) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-right">
          <span>{firstname}</span>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
