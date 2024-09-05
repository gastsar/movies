import Popular from "./components/Popular/Popular";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Popular />
    </main>
  );
}
