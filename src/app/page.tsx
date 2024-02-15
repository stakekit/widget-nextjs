import styles from "./page.module.css";
import { Widget } from "./widget";

export default function Home() {
  return (
    <main className={styles.main}>
      <Widget />
    </main>
  );
}
