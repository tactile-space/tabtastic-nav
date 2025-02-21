
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
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white z-50 border-t border-gray-200">
      <div className="grid grid-cols-4 h-full">
        {tabs.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex flex-col items-center justify-center space-y-1",
              location.pathname === path
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            <Icon
              size={20}
              className={cn(
                "transition-colors duration-200",
                location.pathname === path && "text-gray-900",
                !location.pathname.includes(path) && "text-gray-500 group-hover:text-gray-700"
              )}
            />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
