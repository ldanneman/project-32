import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar({ routes }) {
  const keys = Object.keys(routes);
  return (
    <div>
      <nav>
        <ul className={styles.ul}>
          {keys.map((key, i) => {
            return (
              <li className={styles.li}>
                <Link className={styles.link} to={routes[i].path}>
                  {routes[i].name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
