import Navbar from "../ui/NavBar";
import Carousel from "../ui/Carrousel";
import CategoryList from "../ui/CategoryList";
/* import PortraitCard from "../ui/PortraitCard"; */
import { Outlet } from "react-router-dom";
import MoviesList from "../ui/MoviesList";

export default function Root() {

  return (
    <>
      <section className="bg-colorBgBody relative h-auto overflow-hidden">
        <Navbar />
        <Carousel/>

        <CategoryList />

        <MoviesList/>
        
        <Outlet />
      </section>
    </>
  );
}