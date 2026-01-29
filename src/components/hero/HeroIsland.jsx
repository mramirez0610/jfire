import * as styles from "../../styles/components/HeroIsland.module.scss";
import { useLayoutEffect, useRef } from "preact/hooks";
import Button from "../global/Button";
import gsap from "gsap";

export default function HeroIsland({
  headerTop,
  headerBottom,
  subHeader,
  buttonActions,
}) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //   gsap.to(`.${styles.heroHeader}`, {
      //     y: 0,
      //     x: 0,
      //     opacity: 1,
      //     // duration: 0.8,
      //     duration: 0.6,
      //     ease: "power3.out",
      //   });
      gsap.to(
        gsap.utils.selector(root.current)("h1"),
        {
          y: 0,
          x: 200,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        },
        root
      );

      gsap.to(`.${styles.heroSubHeader}`, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(`.${styles.heroButtons}`, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const headerClass =
    headerTop === "Jesse"
      ? `${styles.heroHeader} ${styles.homeHeroHeader}`
      : styles.heroHeader;

  return (
    <section className={styles.heroIsland}>
      <div ref={root} className={headerClass}>
        <h1>{headerTop}</h1>
        <h1>{headerBottom}</h1>
      </div>

      <div className={styles.heroSubHeader}>
        <h2>{subHeader}</h2>
      </div>

      <div className={styles.heroButtons}>
        {buttonActions.map(({ href, label }) => (
          <Button href={href} label={label} />
        ))}
      </div>
    </section>
  );
}
