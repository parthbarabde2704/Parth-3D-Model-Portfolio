import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// 👉 simple fallback (no smoother now)
export let smoother: any = null;

const Navbar = () => {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    let links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();

          let target = element.getAttribute("data-href");

          if (target) {
            document.querySelector(target)?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });

    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <>
      <div className="header">
        <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem" }}>
  Parth
</span>

        <a
          href="mailto:parthbarabde@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          parthbarabde@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;