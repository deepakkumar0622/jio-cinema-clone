/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./show.module.css";

const Show = (props) => {
  return (
    <div>
      <Link to={`/details/${props.data.id}`}>
        <div className={styles.show}>
          <img src={props.data.imageUrl} />
          <div className={styles.movieTitle}>{props.data.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default Show;
