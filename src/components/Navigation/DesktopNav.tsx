
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
    <nav className="hidden lg:flex fixed top-0 left-0 right-0 h-20 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between w-full">
        <div className="flex-1">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Logo
          </span>
        </div>
        <div className="flex items-center space-x-12">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group py-7 px-1"
              onMouseEnter={() => setHovered(link.path)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className={cn(
                  "text-sm font-medium transition-all duration-200 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600",
                  location.pathname === link.path
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                    : "text-gray-600"
                )}
              >
                {link.name}
              </span>
              <span
                className={cn(
                  "absolute bottom-5 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 to-pink-600 transform origin-left transition-transform duration-300",
                  (location.pathname === link.path || hovered === link.path)
                    ? "scale-x-100"
                    : "scale-x-0"
                )}
              />
              <span
                className={cn(
                  "absolute inset-0 rounded-lg -z-10 transition-all duration-300 opacity-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50",
                  (location.pathname === link.path || hovered === link.path) && "opacity-100"
                )}
              />
            </Link>
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          <button className="relative px-6 py-3 rounded-full overflow-hidden group">
            <span className="relative z-10 text-sm font-semibold text-white transition-colors duration-200">
              Get Started
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-200 group-hover:scale-[1.05]" />
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-pink-600 to-purple-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
