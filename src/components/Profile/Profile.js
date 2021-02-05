import React from "react";
import styles from "./Profile.module.css";
import Cards from "../Cards/Cards";
import About from "../About/About";
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

      {/* <section className="py-5">
        <div className="container">
          <h2 className="font-weight-light">Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita.
          </p>
        </div>
      </section> */}
      <section>
        <div className="container">
          <h2
            className={[`${styles.titleStyle}`, "font-weight-light"].join(" ")}
          >
            Our Services
          </h2>
          <hr />

          <div class="row">
            <div class="col-sm-4">
              <Cards
                title="Boudoir"
                description="Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
                classToApply={0}
              />
            </div>
            <div class="col-sm-4">
              <Cards
                title="Couple"
                description="Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
                classToApply={1}
              />
            </div>
            <div class="col-sm-4">
              <Cards
                title="Maternity"
                description="Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
                classToApply={2}
              />
            </div>
          </div>

          <h2
            className={[`${styles.titleStyle}`, "font-weight-light"].join(" ")}
          >
            About
          </h2>
          <div className="container">
            <hr />
            <About />
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default Profile;
