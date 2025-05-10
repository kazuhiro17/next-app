import styles from "./about.module.css";
export default function AboutPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>About Page</div>
        <div className={styles.button}>
          <a href="./" className={styles.link}>トップページへ</a>
        </div>
      </div>
    </>
  );
}
