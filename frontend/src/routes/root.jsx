import { Outlet } from "react-router-dom";
import AccueilPage from "../ui/AccueilPage";
import NavigationBar from "../ui/NavigationBar/";

export default function Root() {

  return (
    <>
      <NavigationBar />
      <AccueilPage />
      <Outlet />
    </>
  );
}