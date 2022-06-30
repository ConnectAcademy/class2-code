import React, { useContext } from "react";
import { Context } from "../Context";

import WithAuth from "../HOC/withAuth";

const Home = () => {
  const { user, setUserInfo } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, age } = e.target;
    const data = {
      name: name.value,
      surname: surname.value,
      age: age.value,
    };
    setUserInfo(data);
  };

  console.log(user);

  return (
    <div>
      <h1>
        Hello {user && typeof user === "string" && user}
        {typeof user === "object" && `${user?.name} ${user?.surname}`}
      </h1>
      {typeof user === "string" && (
        <form onSubmit={handleSubmit}>
          <p>Please enter your information</p>
          <input placeholder="Enter your name" name="name" />
          <input placeholder="Enter your surname" name="surname" />
          <input placeholder="Enter your age" type="number" name="age" />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default WithAuth(Home);
