import * as styles from "../../styles/components/Button.module.scss";

export default function Button({ label, href }) {
  return (
    <a href={href} className={styles.buttonContainer}>
      <button className={styles.button}>{label}</button>
    </a>
  );
}
