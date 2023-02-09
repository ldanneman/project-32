import React from "react";
import styles from "./colorPicker.module.css";
import Modal from "../Modal/Modal";
import { colors } from "./pickerColors.js";

function ColorPicker() {
  const initialColor = () => {
    // let it = colors.some((x) => x === values.backgroundColor);
    // if (it) return colors.indexOf(values.backgroundColor);
    return 0;
  };
  const [showModal, setShowModal] = React.useState(false);
  const [selected, setSelected] = React.useState(initialColor());
  const [chosen, setChosen] = React.useState(colors[selected]);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleSelected = (i) => {
    if (i === selected) {
      setSelected(-1);
    } else {
      setSelected(i);
    }
  };

  const handleClose = () => {
    setChosen(colors[selected]);
    setShowModal(!showModal);
  };

  React.useEffect(() => {}, [chosen]);
  return (
    <>
      <div className={styles.outer} onClick={handleClick}>
        <div className={styles.color} style={{ backgroundColor: chosen }}></div>
      </div>
      <div
        className={styles.modal}
        style={{
          ...(showModal ? { display: "inline-block" } : { display: "none" }),
        }}
      >
        <div>
          {colors.map((color, i) => {
            return (
              <div
                key={i}
                className={styles.colors}
                style={{
                  backgroundColor: color,
                  ...(i === selected
                    ? {
                        borderColor: "white",
                        borderWidth: 5,
                      }
                    : {}),
                }}
                onClick={() => handleSelected(i)}
              ></div>
            );
          })}
        </div>
        <button className={styles.modalClose} onClick={handleClose}>
          OK
        </button>
      </div>
    </>
  );
}

export default ColorPicker;
