/* eslint-disable react/prop-types */

import styles from "./header.module.css";
import logo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import mic from "../../assets/voice-search.svg";
import search from "../../assets/ic_search.svg";
import user from "../../assets/user.png";
import { useEffect, useState } from "react";
import Search from "../Search/Search";

const Header = (props) => {
  const links = ["Home", "Sports", "Movies", "Tv Shows", "More"];
  const [click, setclick] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState([]);

  const handleClick = (i) => {
    setclick(i);
  };

  useEffect(() => {
    if (searchInput !== "") {
      const filterMovies = props.data.filter((v) => {
        return v.name.toUpperCase().includes(searchInput.toUpperCase());
      });
      setFilter(filterMovies);
    } else {
      setFilter([]);
    }
  }, [searchInput]);

  console.log(filter);
  return (
    <div>
      <header className={styles.header}>
        <div>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <img src={logo} alt="Logo" />
              <button className={styles.premiumbutton}>
                <img src={crown} />
                <p>Go Premium</p>
              </button>
            </div>

            <ul className={styles.navlinks}>
              {links.map((v, i) => {
                return (
                  <li
                    key={i}
                    className={` ${styles.navlink} ${
                      click === i ? styles.active : " "
                    }`}
                    onClick={() => handleClick(i)}
                  >
                    {v}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className={styles.search}>
          <div className={styles.searchbox}>
            <div className={styles.headericon}>
              <img src={search} alt="search" />
            </div>
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              className={styles.input}
              type="text"
              placeholder="Movies,shows and more"
            />
            <div className={styles.headericon}>
              <img src={mic} alt="mic" />
            </div>
          </div>
          <div className={styles.usericon}>
            <img src={user} alt="User" height={35} width={35} />
          </div>
        </div>
      </header>

      {filter.length !== 0 ? (
        <div className={styles.searchInput}>
          {filter.map((v, i) => {
            return (
              <div key={i}>
                <Search data={v} />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Header;
