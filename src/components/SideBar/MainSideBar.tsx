import { FaHome, FaUserPlus } from "react-icons/fa";
import SideBar from "./SideBar";
import { SidebarItem } from "./SideBarItem";

const MainSideBar = () => {
  return (
    <SideBar>
      <SidebarItem
        icon={<FaHome size={20} />}
        text="Dashboard"
        to="/"
        active={location.pathname === "/"}
      />
      <SidebarItem
        icon={<FaUserPlus size={20} />}
        text="Add Contact"
        to="/add-contact"
        active={location.pathname === "/add-contact"}
      />
    </SideBar>
  );
};

export default MainSideBar;
