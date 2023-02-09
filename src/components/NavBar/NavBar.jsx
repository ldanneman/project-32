import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import AppContext from "@/context/appContext";
import Button from "../../components/Button/Button";

function NavBar({ routes, ...props }) {
  const { user, setUser } = useContext(AppContext);
  const keys = Object.keys(routes);
  return (
    <div {...props}>
      <nav>
        <ul className={styles.ul}>
          {keys.map((key, i) => {
            return (
              <li className={styles.li} key={i}>
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
