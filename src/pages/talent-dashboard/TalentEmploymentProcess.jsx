import TalentSidebar from "../../components/TalentSidebar";
import TalentDashboardHeader from "../../components/TalentDashboardHeader";

export default function TalentEmploymentProcess() {
  return (
    <>
      <div className="flex bg-gray-50">

        {/* Sidebar */}
        <TalentSidebar />

        {/* Main Content */}
        <div className="ml-16 md:ml-64 flex-1 min-h-screen">

          <TalentDashboardHeader
            title="Dashboard Overview"
            subtitle="Overview of the talent dashboard"
            user={{ fullName: "John Deo" }}
          />

          {/* PAGE CONTENT */}
          <div className="p-4">

            {/* Top Cards */}
            <div className="">
              <h1 className="text-4xl font-bold text-gray-700">THIS IS THE TALENT EMPLOYMENT PROCESS PAGE</h1>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}