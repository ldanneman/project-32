import React from "react";
import useModal from "../../hooks/useModal";
import Button from "../../components/Button/Button";
function Stocks() {
  const [Modal, openModal, closeModal] = useModal();
  const al = () => {
    alert("HELLLO");
  };
  return (
    <div>
      <div>Stocks</div>
      <Modal>
        <div>Modal</div>
        <Button onClick={closeModal}>Close Modal</Button>
      </Modal>
      <Button onClick={openModal}>Open Modal</Button>
    </div>
  );
}

export { Stocks };
