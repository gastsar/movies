"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Form.module.scss";
const Form = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append("sort_by", form.get("sort"));
    searchParams.append("release_date.gte", form.get("fromDate"));
    searchParams.append("release_date.lte", form.get("toDate"));

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Filter</h2>
      <div>
        <h3>Date de sortie</h3>
        <div className={styles.date}>
          <label>
            <span>Du</span>
            <input type="date" name="fromDate" />
          </label>
          <label>
            <span>Au</span>
            <input
              type="date"
              name="toDate"
              defaultValue={new Date().toISOString().substring(0, 10)}
            />
          </label>
        </div>
        <div className={styles.sort}>
          <label>
            <span>Trier par</span>
            <select name="sort">
              <option value="popularity.desc">Popularité </option>

              <option value="vote_average.desc">Note moyenne</option>
              <option value="cote_count.desc">Nombre de notes</option>
            </select>
          </label>
        </div>
      </div>

      <button type="submit">Filtrer</button>
    </form>
  );
};

export default Form;
