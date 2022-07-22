import React from "react";
import styles from "./css/modal.module.css";

function useModal() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(!modalVisible);
  };
  const closeModal = () => setModalVisible(false);
  const Modal = React.memo(
    ({ children, customStyle, onModalShow, ...props }) => {
      return (
        <div
          style={{
            ...(modalVisible ? { display: "block" } : { display: "none" }),
          }}
          className={styles.modal}
        >
          <div className={styles.modalContent} style={customStyle} {...props}>
            {children}
          </div>
        </div>
      );
    }
  );
  return [Modal, openModal, closeModal];
}

export default useModal;
