import React, { useEffect, useContext } from "react";
import useModal from "../../hooks/useModal";
import Button from "../../components/Button/Button";
import AppContext from "@/context/appContext";
import { useForm } from "react-hook-form";
import users from "../../data/users.json";
import { Input, Select } from "../../components/FormTypes/FormTypes";
import Tabs from "../Tabs/Tabs";
import { useNavigate } from "react-router-dom";
import Text from "../Text/Text";

function Auth({ closeModal }) {
  const { user, setUser } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const onSignIn = (data) => {
    const authenticated = users.find(
      (x) => x.username === data["User Name"] && x.password === data["Password"]
    );
    if (authenticated) {
      setUser(authenticated);
      closeModal();
      navigate("/");
    }
    setError("Invalid username or password");
  };
  const onSignUp = (data) => {};

  const ages = Array.from({ length: 82 }, (_, i) => i + 1).map((x) => ({
    value: x + 17,
  }));
  ages.unshift({ value: "" });

  const SignInForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit(onSignIn)}>
          <Input
            label="User Name"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Password"
            register={register}
            errors={errors}
            required
          />
          <Button type="submit">SignIn</Button>
        </form>
        <div style={{ color: "red" }}>{error}</div>
      </>
    );
  };

  const SignUpForm = () => {
    return (
      <>
        <iframe
          id="secret-frame"
          name="secret-frame"
          width="0"
          height="0"
          border="0"
          style={{ display: "none" }}
        ></iframe>
        <form
          //   onSubmit={handleSubmit(onSignUp)}
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeb3turec-Lmw4rVoaYE0flFIxgvZGoIjRApCZTqIqraA__oA/formResponse"
          target="secret-frame"
          method="POST"
        >
          <Input
            label="First Name"
            register={register}
            errors={errors}
            name="entry.1195399140"
            required
          />
          <Input
            label="Last Name"
            register={register}
            errors={errors}
            name="entry.1374906180"
            required
          />
          <Input
            label="User Name"
            register={register}
            errors={errors}
            name="entry.1776659528"
            required
          />
          <Input
            label="Email"
            register={register}
            errors={errors}
            name="entry.1735760702"
            required
          />
          <Input
            label="Password"
            register={register}
            errors={errors}
            name="entry.613206417"
            required
          />
          <Input
            label="Age"
            register={register}
            // options={ages}
            errors={errors}
            name="entry.449075269"
            required
          />
          <Input
            label="Address"
            register={register}
            errors={errors}
            name="entry.407567605"
            required
          />
          <Input
            label="City"
            register={register}
            errors={errors}
            name="entry.531979991"
            required
          />
          <Input
            label="State"
            register={register}
            errors={errors}
            name="entry.2107086002"
            required
          />
          <Input
            label="Zip Code"
            register={register}
            errors={errors}
            name="entry.1046802205"
            required
          />
          <Button
            id="submit"
            type="submit"
            value="Submit"
            // onClick={(e) => handleGoogleSubmit(e)}
          >
            Sign Up
          </Button>
        </form>
        <div style={{ color: "red" }}>{error}</div>
      </>
    );
  };

  return (
    <div>
      <Tabs
        options={[
          { label: "Sign In", component: <SignInForm /> },
          { label: "Sign Up", component: <SignUpForm /> },
        ]}
      />
    </div>
  );
}

export default Auth;
