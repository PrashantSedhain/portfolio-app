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
              <div
                style={{
                  borderWidth: "3px 3px",
                  borderColor: "white",
                  width: "250px",
                  height: "180px",
                  border: "solid #FFFFFF",
                  display: "inline-block",
                }}
              >
                <h2 className={styles.textStyle}>Meraki by Liz Photography</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

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
                genre="boudoir"
              />
            </div>
            <div class="col-sm-4">
              <Cards
                title="Couple"
                description="Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
                classToApply={1}
                genre="couple"
              />
            </div>
            <div class="col-sm-4">
              <Cards
                title="Maternity"
                description="Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
                classToApply={2}
                genre="maternity"
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
