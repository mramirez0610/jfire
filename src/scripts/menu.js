import gsap from "gsap";

const toggle = document.querySelector("#mobile-button");
const nav = document.querySelector("#mobile-nav");

if (toggle && nav) {
  gsap.set(nav, { autoAlpha: 0, y: -20, display: "none" });

  const open = () => {
    gsap.set(nav, { display: "block" });
    gsap.to(nav, { y: 0, autoAlpha: 1, duration: 0.35, ease: "power2.out" });
  };
  const close = () => {
    gsap.to(nav, {
      y: -10,
      autoAlpha: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => gsap.set(nav, { display: "none" }),
    });
  };

  let isOpen = false;
  toggle.addEventListener("click", () => {
    isOpen = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
    isOpen ? open() : close();
  });
}
