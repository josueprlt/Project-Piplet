import { Outlet } from "react-router-dom";

export default function Root() {

  return (
    <>
      <section className="">

        <Outlet />
      </section>
    </>
  );
}