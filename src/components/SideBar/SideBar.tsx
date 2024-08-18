import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="w-16 pt-8 md:w-48 lg:w-72 bg-gray-200 text-white flex-shrink-0">
      <nav className="h-full flex flex-col">

        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
}
