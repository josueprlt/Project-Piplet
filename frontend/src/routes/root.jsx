import { Outlet } from "react-router-dom";
import AccueilPage from "../ui/AccueilPage";

export default function Root() {

  return (
    <>
      <section className="">
        <AccueilPage />
        <Outlet />
      </section>
    </>
  );
}