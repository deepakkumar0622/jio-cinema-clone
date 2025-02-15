/* eslint-disable react/prop-types */
import styles from "./search.module.css";

const Search = (props) => {
  return (
    <>
      <div className={styles.show}>
        <img src={props.data.imageUrl} alt="poster" />
        <div className={styles.movieTitle}>{props.data.name}</div>
      </div>
    </>
  );
};

export default Search;
