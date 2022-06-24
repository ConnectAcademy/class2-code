import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import { getAllUsers } from "../services/usersService";

const Home = () => {
  const [users, setUser] = useState(null);
  useEffect(() => {
    getAllUsers()
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  }, []);

  console.log(users);
  return (
    <>
      {users?.map((user) => (
        <Card
          id={user.id}
          key={user.id}
          name={user.name}
          email={user.email}
          bio={user.company.catchPhrase}
          phone={user.phone}
        />
      ))}
    </>
  );
};

export default Home;
