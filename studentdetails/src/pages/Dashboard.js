import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page-center">
      <h2>📊 Dashboard</h2>

      <div className="dashboard-links">
        <Link to="profile">👤 Profile</Link>
        <Link to="settings">⚙️ Settings</Link>
      </div>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;