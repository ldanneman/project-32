import React, { useEffect, useContext } from "react";
import useModal from "../../hooks/useModal";
import Button from "../../components/Button/Button";
import AppContext from "context/appContext";

function Auth({ closeModal }) {
  const { user, setUser } = useContext(AppContext);

  const signIn = () => {
    setUser(!user);
    closeModal();
  };
  useEffect(() => {}, []);

  return (
    <div>
      <Button onClick={signIn}>SignIn</Button>
    </div>
  );
}

export default Auth;
