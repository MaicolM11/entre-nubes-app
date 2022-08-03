import React, { useEffect, useState } from "react";
import { getAllBoliranas, resetBolirana } from "../../../services/bolirana";

import "./Boliranas.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import BoliranasTimeControlContainer from "../../../components/cards-container/BoliranasTimeControlContainer";
import AssingBoliranaTimeModal from "../../../components/modals/AssingBoliranaTimeModal";
import ResetTimeModal from "../../../components/modals/ResetTimeModal";

const Boliranas = ({ salesmanName }) => {
  const [currentBolirana, setCurrentBolirana] = useState({});
  const [boliranas, setBoliranas] = useState([]);

  const [isOpenAssingTimeModal, setIsOpenAssingTimeModal] = useState(false);
  const [isOpenResetTimeModal, setIsOpenResetTimeModal] = useState(false);

  const openAssingTimeModal = () => {
    setIsOpenAssingTimeModal(!isOpenAssingTimeModal);
  };

  const openResetTimeModal = () => {
    setIsOpenResetTimeModal(!isOpenResetTimeModal);
  };

  const handleResetTime = (bolirana) => {
    setCurrentBolirana(bolirana);
    openResetTimeModal();
  };

  const handleStartTime = (bolirana) => {
    setCurrentBolirana(bolirana);
    openAssingTimeModal();
  };

  const resetCurrentBoliranaTime = () => {
    resetBolirana(currentBolirana._id).then(async (res) => {
      const data = res.json();
      if (res.ok) {
        openResetTimeModal();
        getBoliranas();
      } else {
        alert(data.message);
      }
    });
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
            updateBoliranas={getBoliranas}
            setIsOpenAssingBoliranaTime={openAssingTimeModal}
          />
        }
        isOpen={isOpenAssingTimeModal}
        setIsOpen={setIsOpenAssingTimeModal}
      />
      <AnimatedModalContainer
        modal={
          <ResetTimeModal
            handleCloseModal={openResetTimeModal}
            handleSubmitResetTime={resetCurrentBoliranaTime}
          />
        }
        isOpen={isOpenResetTimeModal}
        setIsOpen={setIsOpenResetTimeModal}
      />
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
