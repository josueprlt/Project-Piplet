import { Outlet } from "react-router-dom";
import DashboardPage from "../ui/DashboardPage";

export default function Dashboard() {

  return (
    <>
      <section className="">
        <DashboardPage />
        <Outlet />
      </section>
    </>
  );
}