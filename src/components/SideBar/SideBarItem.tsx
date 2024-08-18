import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  to: string;
  active?: boolean;
}

export function SidebarItem({ icon, text, to, active }: SidebarItemProps) {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      <Link to={to} className="flex items-center w-full">
        {/* Icon with optional text */}
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            // Display text on large screens
            "hidden md:block ml-3"
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
