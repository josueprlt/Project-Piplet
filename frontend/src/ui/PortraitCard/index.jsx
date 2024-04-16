export default function PortraitCard() {

  return (
    <>
      <figure className="group/card w-60 h-80 cursor-pointer overflow-hidden rounded-xl bg-colorBgBtnCate transition-transform delay-500 hover:h-auto hover:scale-125">
        
        <section className="flex justify-center items-center w-60 h-80 overflow-hidden">
            <img className="group-hover/card:scale-105 ease-in-out duration-300" src="/film5.jpg" alt="Film"/>
        </section>
        
        <figcaption className="text-colorWhite px-4 py-3">
            <h3>Title</h3>
            <p>Description</p>
        </figcaption>
      </figure>
    </>
  );
}