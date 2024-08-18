import MapView from "../components/DashBoardContent/MapView";
import MainLayout from "../components/Layout/MainLayout";
import TableView from "../components/DashBoardContent/TableView";

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="p-10 space-y-6">
        <div className="grid grid-row-2 gap-6 h-screen">
          {/* Table */}
          <div className="bg-white shadow-lg rounded-lg overflow-auto">
            <TableView />
          </div>
          {/* Map View */}
          <div className="bg-white shadow-lg rounded-lg p-4 ">
            <MapView />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
