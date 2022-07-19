import React from "react";
import "./Boliranas.css";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";

const Boliranas = ({ salesmanName }) => {
  return (
    <div className="salesman-bolirana-container">
      <Header
        title="Boliranas"
        description="Información de las Boliranas en juego"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
    </div>
  );
};

export default Boliranas;
