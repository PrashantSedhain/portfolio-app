import React from "react";
import styles from "./About.css";
const About = () => {
  return (
    <div>
      <div className="row">
        <div className={["col-sm", `${styles.imageStyle}`].join(" ")}>
          <img
            style={{
              height: "95%",
              width: "95%",
              borderRadius: "40%",
              margin: 10,
            }}
            src="https://images.unsplash.com/photo-1609269623809-957fe18fe113?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="Girl in a jacket"
          />
        </div>
        <div className="col-sm">
          <p style={{ fontWeight: "lighter", fontSize: 22, margin: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita. Consectetur
            adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis
            blanditiis voluptatem hic, assumenda aspernatur facere.
          </p>
          <p
            style={{
              marginTop: 5,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "justify",
            }}
          >
            -Elizabeth-
          </p>
          <div className={styles.buttonStyle}>
            <button type="button" className="btn btn-info">
              More About Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
