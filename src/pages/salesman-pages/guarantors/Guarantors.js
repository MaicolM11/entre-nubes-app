import React, { useEffect, useState } from "react";
import { getAllDebtors } from "../../../services/debtor";

import "./Guarantors.css";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import DebtorCardsContainer from "../../../components/cards-container/DebtorCardsContainer";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import PayModeModal from "../../../components/modals/PayModeModal";

const Guarantors = ({ salesmanName }) => {
  const [debtors, setDebtors] = useState([]);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);

  const getDebtors = () => {
    getAllDebtors().then(async (res) => {
      setDebtors(await res.json());
    });
  };

  const handlePayMode = (debtor) => {
    console.log(debtor.fullname);
    openPayModeModal();
  };

  const openPayModeModal = () => {
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  useEffect(() => {
    getDebtors();
  }, []);

  return (
    <div className="salesman-guarantors-container">
      <AnimatedModalContainer
        modal={<PayModeModal />}
        isOpen={isOpenPayModeModal}
        setIsOpen={setIsOpenPayModeModal}
      />
      <Header
        title="Fiadores"
        description="Información de los clientes fiadores"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <DebtorCardsContainer debtors={debtors} handlePayMode={handlePayMode} />
    </div>
  );
};

export default Guarantors;
