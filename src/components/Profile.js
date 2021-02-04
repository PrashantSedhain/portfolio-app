import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <header className={styles.masthead}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className={`font-weight-dark ${styles.mainTitle}`}>
                Welcome To{" "}
                <span
                  style={{
                    fontSize: 50,
                    color: "#8f6868",
                    fontFamily: "cursive",
                  }}
                >
                  {" "}
                  Meraki By Liz
                </span>{" "}
                Photography{" "}
              </h1>
              <p className={["lead", styles.subtitle].join(" ")}>
                An Ultimate Photography Experience
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <h2 className="font-weight-light">Page Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
