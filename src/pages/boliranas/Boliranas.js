import React from "react";
import "./Boliranas.css";
import Header from "../../components/header/Header";
import NotificationButton from "../../components/header/NotificationButton";

const Boliranas = () => {
  return (
    <div className="boliranas-container">
      <Header
        title="Boliranas"
        description="Información de las Boliranas"
        component={<NotificationButton />}
      />
    </div>
  );
};

export default Boliranas;
