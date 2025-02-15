/* eslint-disable react/prop-types */
import styles from "./featurecard.module.css";

const FeatureCard = (props) => {
  return (
    <div className={styles.featuredCard}>
      <img src={props.data.imageUrl} />
      <div className={styles.movieTitle}>
        {props.data.name}
        <div className={styles.moviedesc}>{props.data.description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
