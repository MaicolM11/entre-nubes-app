import React, { useEffect, useState } from "react";
import { getAllBoliranas } from "../../../services/bolirana";

import "./Boliranas.css";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import BoliranasTimeControlContainer from "../../../components/cards-container/BoliranasTimeControlContainer";

const Boliranas = ({ salesmanName }) => {
  const [boliranas, setBoliranas] = useState([]);

  const handleResetTime = () => {
    console.log("Reset time...");
  };

  const handleStartTime = () => {
    console.log("Start time...");
  };

  const getBoliranas = () => {
    getAllBoliranas().then(async (res) => {
      setBoliranas(await res.json());
    });
  };

  useEffect(() => {
    getBoliranas();
  }, []);

  return (
    <div className="salesman-bolirana-container">
      <Header
        title="Boliranas"
        description="Información de las Boliranas en juego"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <BoliranasTimeControlContainer
        boliranas={boliranas}
        handleResetTime={handleResetTime}
        handleStartTime={handleStartTime}
      />
    </div>
  );
};

export default Boliranas;
