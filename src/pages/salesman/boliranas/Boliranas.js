import React, { useEffect, useState } from "react";
import {
  getAllBoliranas,
  resetBolirana,
  startBolirana,
} from "../../../services/bolirana";
import { convertTimeToMs } from "../../../utils/BoliranaTimer";

import "./Boliranas.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import BoliranasTimeControlContainer from "../../../components/cards-container/BoliranasTimeControlContainer";
import AssingBoliranaTimeModal from "../../../components/modals/AssingBoliranaTimeModal";
import ResetTimeModal from "../../../components/modals/ResetTimeModal";
import EmptyMessage from "../../../components/empty-message/EmptyMessage";
import { ReactComponent as EmptyTime } from "../../../assets/images/empty-time.svg";

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

  const startBoliranaTime = (currentHours, minutesTime) => {
    const totalMs = convertTimeToMs(currentHours, minutesTime);
    startBolirana(currentBolirana._id, totalMs).then(async (res) => {
      const data = res.json();
      if (res.ok) {
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
            setIsOpenAssingBoliranaTime={openAssingTimeModal}
            startBoliranaTime={startBoliranaTime}
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
      {boliranas.length > 0 ? (
        <BoliranasTimeControlContainer
          boliranas={boliranas}
          handleResetTime={handleResetTime}
          handleStartTime={handleStartTime}
        />
      ) : (
        <EmptyMessage
          img={<EmptyTime />}
          title="Sin Boliranas"
          description="Aún no se han comprado las Boliranas para el Bar."
        />
      )}
    </div>
  );
};

export default Boliranas;
