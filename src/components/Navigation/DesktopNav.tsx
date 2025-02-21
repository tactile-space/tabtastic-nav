
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DesktopNav = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Deals", path: "/deals" },
    { name: "Chat", path: "/chat" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="hidden lg:flex fixed top-0 left-0 right-0 h-16 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between w-full">
        <div className="flex-1">
          <span className="text-xl font-bold text-gray-900">
            Logo
          </span>
        </div>
        <div className="flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative py-5 px-1"
              onMouseEnter={() => setHovered(link.path)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  location.pathname === link.path
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {link.name}
              </span>
              {(location.pathname === link.path || hovered === link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900" />
              )}
            </Link>
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
