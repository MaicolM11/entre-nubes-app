import React from "react";
import "./Employees.css";
import Header from "../../components/header/Header";
import NotificationButton from "../../components/header/NotificationButton";

const Employees = () => {
  return (
    <div className="employees-container">
      <Header
        title="Colaboradores"
        description="Información de los colaboradores contratados"
        component={<NotificationButton />}
      />
    </div>
  );
};

export default Employees;
