import React from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import ChildrenCard from "./components/ChildrenCard";

const App = () => {
  return (
    <div className="conatiner">
      <Header title="LET'S CONNECT" />
      <div className="card-container">
        <Card
          image="images/location.png"
          header="OUR MAIN OFFICE"
          text="SoHo 94 Broadway St New York, NY 1001"
        />
        <Card
          image="images/call.png"
          header="PHONE NUMBER"
          text="234-9876-5400 888-0123-4567 (Toll Free)"
        />
        <Card image="images/fax.png" header="FAX" text="1-234-567-8900" />
        <Card image="images/email.png" header="EMAIL" text="hello@themes.com" />
      </div>
      <div className="children-card">
        <ChildrenCard
          title="GET A FREE CASE EVALUATION"
          text="AVAILABLE 24 HOURS A DAY"
        >
          <input className="input" placeholder="Placeholder" />
          <input className="input" placeholder="Placeholder" />
          <input className="input" placeholder="Placeholder" />
          <input className="button" type="submit" />
        </ChildrenCard>
        <ChildrenCard
          title="WE ARE HERE"
          text="Mon-Fri 8:30am- 5pm / Phones are open 24/7"
        >
          <img
            src={process.env.PUBLIC_URL + "images/mapa.jpeg"}
            width={400}
            height={400}
          />
        </ChildrenCard>
      </div>
    </div>
  );
};

export default App;
