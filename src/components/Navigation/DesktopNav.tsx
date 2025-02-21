
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
    <nav className="hidden lg:flex fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between w-full">
        <div className="flex-1">
          <span className="text-xl font-semibold">Logo</span>
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
                  "text-sm transition-colors duration-200",
                  location.pathname === link.path
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                )}
              >
                {link.name}
              </span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-200",
                  (location.pathname === link.path || hovered === link.path)
                    ? "scale-x-100"
                    : "scale-x-0"
                )}
              />
            </Link>
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          <button className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium transition-transform duration-200 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
