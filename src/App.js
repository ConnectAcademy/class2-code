import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./App.css";

const mySchema = yup.object({
  number: yup.number(),
  email: yup.string().email().required(),
  username: yup.string().max(12).required(),
  password: yup.string().min(6).max(16).required(),
});

const App = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mySchema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Plase enter your favorite number</label>
        <input placeholder="Fav number" {...register("number")} type="number" />
        <p>{errors?.number?.message}</p>
        <label htmlFor="email">Plase enter your email</label>
        <input placeholder="Email" {...register("email")} />
        <p>{errors?.email?.message}</p>
        <label htmlFor="username">Plase enter your username</label>
        <input placeholder="Username" {...register("username")} />
        <p>{errors?.username?.message}</p>
        <label htmlFor="password">Plase enter your password</label>
        <div>
          <input
            placeholder="Password"
            type={!showPass && "password"}
            {...register("password")}
          />
          <p>{errors?.password?.message}</p>
          <button type="button" onClick={() => setShowPass((prev) => !prev)}>
            Oko
          </button>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
