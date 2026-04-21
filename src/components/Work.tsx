import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const titles = [
  {
    name: "Sundown-Studio Landing Page",
    category: "Self Project",
    tools: "Javascript, TypeScript, React, Threejs",
    image: "/images/placeholder.png",
  },
  {
    name: "Cyberfication 3D model",
    category: "Self Project",
    tools: "React.js, Next.js, TailwindCSS, D3.js",
    image: "/images/Cyberfication.png",
  },
  {
    name: "E-commerce Platform",
    category: "Academic Project",
    tools: "Javascript, html, css, Stripe API",
    image: "/images/Smart.png",
  },
  {
    name: "Portfolio",
    category: "Portfolio",
    tools: "React, Three.js, Framer Motion",
    image: "/images/Port.png",
  },
  {
    name: "Calculator",
    category: "Project",
    tools: "CSS, HTML, Javascript",
    image: "/images/Calc.jpg",
  },
  {
    name: "Student Management System",
    category: "Project",
    tools: "Java, PostgreSQL",
    image: "/images/SMS.png",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = (box[0] as HTMLElement).getBoundingClientRect();
      const parentWidth = (
        box[0] as HTMLElement
      ).parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0] as Element).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(6)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{titles[index].name}</h4>
                    <p>{titles[index].category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{titles[index].tools}</p>
              </div>
              <WorkImage
                image={titles[index].image}
                alt={titles[index].name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;