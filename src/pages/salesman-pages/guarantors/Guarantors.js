import React, { useState } from "react";
import "./Guarantors.css";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import DebtorCardsContainer from "../../../components/cards-container/DebtorCardsContainer";

import {getAllDebtors} from "../../../services/debtor"

const Guarantors = ({ salesmanName }) => {
  let debtors = [
    { id: 1, name: "Juan Jose", document: 91300324, phone: 3213453234 },
    { id: 2, name: "Enrnezto Frey", document: 91300324, phone: 3213453234 },
    { id: 3, name: "Mr Jagger", document: 91300324, phone: 3213453234 },
    { id: 4, name: "Sr Lili", document: 91300324, phone: 3213453234 },
    { id: 5, name: "Omaewa", document: 91300324, phone: 3213453234 },
    { id: 6, name: "El Pepe", document: 91300324, phone: 3213453234 },
    { id: 7, name: "Pichin", document: 91300324, phone: 3213453234 },
    { id: 8, name: "El Jajas", document: 91300324, phone: 3213453234 },
  ];

  // [debtors, setDebtors] = useState([])

  return (
    <div className="salesman-guarantors-container">
      <Header
        title="Fiadores"
        description="Información de los clientes fiadores"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <DebtorCardsContainer debtors={debtors} />
    </div>
  );
};

export default Guarantors;
