import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={styles.grid}>
        <div className={styles.mt_description}>
          <p
            className={[styles.center_landing, styles.title_landing].join(" ")}
          >
            <b>Liz Photography</b>
          </p>
          <br />
          <p
            className={[styles.center_landing, styles.description_landing].join(
              " "
            )}
          >
            Enjoy the best photography industry in the world
          </p>
          <br />
          <p className={styles.center_landing}>
            <button className={styles.button_landing}>
              <b>Getting Started</b>
            </button>
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/3NfDmn9/productivity.png"
            alt="programador"
            height="424px"
            width="524px"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
