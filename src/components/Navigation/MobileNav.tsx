
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
    <nav className="lg:hidden fixed bottom-4 left-4 right-4 h-16 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl z-50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/20">
      <div className="grid grid-cols-4 h-full relative">
        {tabs.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 transition-all duration-200 relative group",
              location.pathname === path
                ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"
                : "text-gray-500 hover:text-gray-800"
            )}
          >
            <Icon
              size={20}
              className={cn(
                "transition-all duration-200 group-hover:scale-110",
                location.pathname === path && "scale-110 stroke-[2.5px]",
                !location.pathname.includes(path) && "group-hover:stroke-gray-800"
              )}
              style={{
                stroke: location.pathname === path ? "url(#gradient)" : undefined,
              }}
            />
            <span className="text-xs font-medium">{label}</span>
            {location.pathname === path && (
              <span className="absolute -bottom-4 left-1/2 w-12 h-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600" />
            )}
          </Link>
        ))}
        <svg width="0" height="0" className="absolute">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </svg>
      </div>
    </nav>
  );
};

export default MobileNav;
