
import { cn } from "@/lib/utils";
import { Home, ShoppingBag, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();

  const tabs = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ShoppingBag, label: "Deals", path: "/deals" },
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-4 left-4 right-4 h-16 bg-white backdrop-blur-xl z-50 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.08)] border border-gray-100">
      <div className="grid grid-cols-4 h-full relative">
        {tabs.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 transition-all duration-200 relative group",
              location.pathname === path
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                : "text-gray-400 hover:text-gray-600"
            )}
          >
            <Icon
              size={20}
              className={cn(
                "transition-all duration-200 group-hover:scale-110",
                location.pathname === path && "scale-110 stroke-[2.5px]",
                !location.pathname.includes(path) && "group-hover:stroke-gray-600"
              )}
              style={{
                stroke: location.pathname === path ? "url(#gradient)" : undefined,
              }}
            />
            <span className="text-xs font-medium">{label}</span>
            {location.pathname === path && (
              <span className="absolute -bottom-4 left-1/2 w-12 h-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
            )}
          </Link>
        ))}
        <svg width="0" height="0" className="absolute">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </svg>
      </div>
    </nav>
  );
};

export default MobileNav;
