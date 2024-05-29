import { Outlet } from "react-router-dom";
import DashboardPage from "../ui/DashboardPage";
import NavigationBar from "../ui/NavigationBar/";

export default function Dashboard() {

  return (
    <>
      <section className="position-relative overflow-hidden">
        <NavigationBar />
        <DashboardPage />
        <Outlet />
      </section>
    </>
  );
}