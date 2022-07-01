import React from "react";
import "./Guarantors.css";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import DebtorCardsContainer from "../../../components/cards-container/DebtorCardsContainer";

const Guarantors = ({salesmanName}) => {

  let debtors = [{name:"Juan Jose" , 
    document: 91300324,
    phone: 3213453234},
    {name:"Juan Jose" , 
    document: 91300324,
    phone: 3213453234},
    {name:"Juan Jose" , 
    document: 91300324,
    phone: 3213453234},
    {name:"Juan Jose" , 
    document: 91300324,
    phone: 3213453234}
]

  return (
  <div className="salesman-guarantors-container">
  <Header
        title="Fiadores"
        description="Información de los clientes fiadores"
        component={<SalesmanData salesmanName={salesmanName} />} />
    <DebtorCardsContainer
    debtors={debtors}/>
    </div>
  )
};

export default Guarantors;
