import React, { useEffect, useState } from "react";
import { getAllBoliranas } from "../../../services/bolirana";

import "./Boliranas.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import BoliranasTimeControlContainer from "../../../components/cards-container/BoliranasTimeControlContainer";
import AssingBoliranaTimeModal from "../../../components/modals/AssingBoliranaTimeModal";

const Boliranas = ({ salesmanName }) => {
  const [currentBolirana, setCurrentBolirana] = useState({});
  const [boliranas, setBoliranas] = useState([]);

  const [isOpenAssingTimeModal, setIsOpenAssingTimeModal] = useState(false);

  const openAssingTimeModal = () => {
    setIsOpenAssingTimeModal(!isOpenAssingTimeModal);
  };

  const handleResetTime = () => {
    console.log("Reset time...");
  };

  const handleSetStartTime = (bolirana) => {
    setCurrentBolirana(bolirana);
    openAssingTimeModal();
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
      <AnimatedModalContainer
        modal={
          <AssingBoliranaTimeModal
            bolirana={currentBolirana}
            setIsOpenAssingBoliranaTime={openAssingTimeModal}
          />
        }
        isOpen={isOpenAssingTimeModal}
        setIsOpen={setIsOpenAssingTimeModal}
      />
      <Header
        title="Boliranas"
        description="Información de las Boliranas en juego"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <BoliranasTimeControlContainer
        boliranas={boliranas}
        handleResetTime={handleResetTime}
        handleStartTime={handleSetStartTime}
      />
    </div>
  );
};

export default Boliranas;
