"use client";

import styles from "./about.module.css";
import { UserCard } from "@/components/UserCard/UserCard";
import { useAllUsers } from "@/hook/useAllUsers";
export default function AboutPage() {
  const { getUsers, userProfiles, loading, error} = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className={styles.container}>
      <div className={styles.title}>About Page</div>
      <div className={styles.button}>
        <a href="./" className={styles.link}>
          トップページへ
        </a>
      </div>
      <button className={styles.button} onClick={onClickFetchUser}>
        データ取得
      </button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p className={styles.loading}>ローディング中...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
