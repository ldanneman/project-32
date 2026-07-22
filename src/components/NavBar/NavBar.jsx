import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import AppContext from "@/context/appContext";

function NavBar({ routes, ...props }) {
  const { user, setUser } = useContext(AppContext);
  const [selected, setSelected] = useState(0);
  const keys = Object.keys(routes);
  React.useEffect(() => {
}, [selected]);
console.log("selected:", selected);
  return (
    <div {...props}>
      <nav>
        <ul className={styles.ul}>
          {keys.map((key, i) => {
            console.log(key, i, "KEY<I");
            return (
              <li className={styles.li} key={i} style={{ ...(i === selected && { backgroundColor: "rgb(187, 187, 187)", borderRadius: "8px"}) }}>
                <Link className={styles.link} to={routes[i].path} onClick={() => setSelected(i)}>
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
