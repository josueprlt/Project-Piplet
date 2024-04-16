import Navbar from "../ui/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {

  return (
    <>
      <section className="bg-light">
        {/* <Navbar /> */}

        <button className="btn btn-warning">Test</button>
        
        <Outlet />
      </section>
    </>
  );
}