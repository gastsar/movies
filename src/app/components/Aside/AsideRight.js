import Genre from "../Genre/Genre";
import ServiceWatch from "../ServiceWatch/ServiceWatch";
import styles from "./AsideRight.module.scss";

const AsideRight = () => {
  return (
    <aside className={styles.asideRight}>
      <Genre />
      <ServiceWatch />
    </aside>
  );
};

export default AsideRight;
