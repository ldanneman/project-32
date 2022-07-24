import React, { useEffect, useContext } from "react";
import useModal from "../../hooks/useModal";
import Button from "../../components/Button/Button";
import AppContext from "context/appContext";
import { useForm } from "react-hook-form";
import users from "../../data/users.json";
import { Input, Select } from "../../components/FormTypes/FormTypes";

function Auth({ closeModal }) {
  const { user, setUser } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState("");

  const onSignIn = (data) => {
    console.log(data);
    const authenticated = users.find(
      (x) => x.username === data["User Name"] && x.password === data["Password"]
    );
    if (authenticated) {
      setUser(authenticated);
      closeModal();
    }
    setError("Invalid username or password");
  };

  const onSignUp = (data) => {
    console.log(data);
  };

  const ages = Array.from({ length: 82 }, (_, i) => i + 1).map((x) => ({ value: x +17}));;

  return (
    <div>
      <form onSubmit={handleSubmit(onSignIn)}>
        <Input label="User Name" register={register} errors={errors} required />
        <Input label="Password" register={register} errors={errors} required />
        <Button type="submit">SignIn</Button>
      </form>
      <text style={{ color: "red" }}>{error}</text>

      <form onSubmit={handleSubmit(onSignUp)}>
        <Input
          label="First Name"
          register={register}
          errors={errors}
          required
        />
        <Input label="Last Name" register={register} errors={errors} required />
        <Input label="User Name" register={register} errors={errors} required />
        <Input label="Email" register={register} errors={errors} required />
        <Input label="Password" register={register} errors={errors} required />
        <Select label="Age" register={register} options={ages} errors={errors} required />
        <Input label="Address" register={register} errors={errors} required />
        <Input label="City" register={register} errors={errors} required />
        <Input label="State" register={register} errors={errors} required />
        <Input label="Zip Code" register={register} errors={errors} required />
        <Button type="submit">Sign Up</Button>
      </form>
      <text style={{ color: "red" }}>{error}</text>
    </div>
  );
}

export default Auth;
