import React from "react";
import styles from "./Cards.module.css";

let imageClasses = [
  styles.property_image_1,
  styles.property_image_2,
  styles.property_image_3,
];
const Cards = (props) => {
  const imageClass = imageClasses[props.classToApply];
  return (
    <div>
      <div className={styles.center}>
        <div className={styles.property_card}>
          <a href={`/portfolio/${props.genre}`}>
            <div className={imageClass}>
              <div className={`${imageClass}`}>
                {/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
              </div>
            </div>
          </a>
          <div className={styles.property_description}>
            <h5> {props.title} </h5>
            <p>{props.description}</p>
          </div>
          <a href="/">
            <div className={styles.property_social_icons}>
              {/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
