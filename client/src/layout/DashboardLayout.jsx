import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
