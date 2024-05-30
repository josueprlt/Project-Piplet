import { useEffect, useRef } from 'react';
import gsap from 'gsap'; // Assurez-vous d'importer gsap

export default function Loader() {

  const loaderRef = useRef(null);

  useEffect(() => {
    // Loader animation
    const loaderTl = gsap.timeline();
    loaderTl.to("#loader-icon", { width: 42, duration: 1 });
    loaderTl.to("#loader-text", { x: 0, duration: 1 }, "+=0.5");
    loaderTl.to("#loader-overlay", { x: 40, duration: 1 }, "-=2");
    loaderTl.to("#loader-icon", { x: -82, duration: 1 }, "-=1.25");
    setTimeout(() => {
      const loader = loaderRef.current;
      if (loader) {
        loader.classList.add("disappear"); // Assurez-vous que "disappear" est la bonne classe
      }
    }, 3300);
    setTimeout(() => {
      const loader = loaderRef.current;
      if (loader) {
        loader.style.display = "none";
      }
    }, 4000);
  }, []); // Assurez-vous de passer un tableau vide comme deuxième argument

  return (
    <div id="loader" ref={loaderRef}>
      <img id="loader-icon" src="/favicon.svg" alt="Loader Icon" />
      <div className="loader-text-wrapper">
        <div id="loader-overlay">
          <svg id="loader-text"
        xmlns="http://www.w3.org/2000/svg"
        width="163"
        height="37"
        fill="none"
        viewBox="0 0 163 37"
      >
        <path
          fill="#fff"
          d="M0 37V0h13.538c2.774 0 5.1.53 6.98 1.59 1.893 1.06 3.32 2.517 4.284 4.372.976 1.843 1.463 3.938 1.463 6.287 0 2.373-.487 4.48-1.463 6.323-.975 1.843-2.415 3.294-4.319 4.354-1.903 1.048-4.248 1.572-7.033 1.572H4.477v-5.51h8.092c1.621 0 2.95-.29 3.983-.867 1.035-.578 1.799-1.373 2.292-2.385.505-1.012.758-2.174.758-3.487 0-1.313-.253-2.47-.758-3.469-.493-1-1.263-1.776-2.31-2.33-1.033-.566-2.367-.85-4-.85H6.54V37H0zM38.486 0v37h-6.54V0h6.54zM45.568 37V0h13.538c2.773 0 5.1.53 6.98 1.59 1.893 1.06 3.32 2.517 4.284 4.372.976 1.843 1.463 3.938 1.463 6.287 0 2.373-.487 4.48-1.463 6.323-.975 1.843-2.415 3.294-4.319 4.354-1.903 1.048-4.248 1.572-7.033 1.572h-8.973v-5.51h8.091c1.622 0 2.95-.29 3.984-.867 1.035-.578 1.799-1.373 2.292-2.385.505-1.012.758-2.174.758-3.487 0-1.313-.253-2.47-.758-3.469-.494-1-1.263-1.776-2.31-2.33-1.033-.566-2.367-.85-4-.85h-5.994V37h-6.54zM77.514 37V0h6.54v31.381h15.9V37h-22.44zM105.63 37V0h23.481v5.619H112.17v10.045h15.724v5.618H112.17v10.1h17.082V37H105.63zM134.196 5.619V0H163v5.619h-11.158V37h-6.487V5.619h-11.159z"
        ></path>
      </svg>
        </div>
      </div>
    </div>
  );
}
