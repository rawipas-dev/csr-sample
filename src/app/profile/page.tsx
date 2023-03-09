"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import classNames from "classnames";

type Props = {};

type Data = {
  uuid: string;
  name: string;
  email: string;
  gender: string;
};

const page = (props: Props) => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        const x = data.results[0];
        const user = {
          name: `${x.name.title} ${x.name.first} ${x.name.last}`,
          gender: x.gender,
          email: x.email,
          uuid: x.login.uuid,
        };
        setData(user);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src="https://picsum.photos/128" alt="Avatar" />
        </div>
        <div>
          <div className={styles.username}>{data.name}</div>
          <div className={styles.account}>{data.email}</div>
        </div>
        <div className={styles.actions}>
          <button className={classNames(styles.button, styles.follow)}>
            Follow
          </button>
          <button className={classNames(styles.button, styles.message)}>
            DM
          </button>
          <button className={classNames(styles.button, styles.more)}>
            <i className={classNames("fas", "fa-ellipsis-h", styles.icon)}></i>
          </button>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNumber}>100</div>
          <div className={styles.statLabel}>Posts</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>1k</div>
          <div className={styles.statLabel}>Followers</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>500</div>
          <div className={styles.statLabel}>Following</div>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.post}>
          <img src="https://picsum.photos/640/640" alt="Post" />
        </div>
      </div>
    </div>
  );
};

export default page;
