import React, { useEffect, useState } from "react";
import { getAllBoliranas, resetBolirana, startBolirana } from "../../../services/bolirana";

import "./Boliranas.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import BoliranasTimeControlContainer from "../../../components/cards-container/BoliranasTimeControlContainer";
import AssingBoliranaTimeModal from "../../../components/modals/AssingBoliranaTimeModal";
import ResetTimeModal from "../../../components/modals/ResetTimeModal";

const Boliranas = ({ salesmanName }) => {
  const defaultRemainingTime = { hours: "00", minutes: "00", second: "00" };
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [currentBolirana, setCurrentBolirana] = useState({});
  const [boliranas, setBoliranas] = useState([]);

  const [currentIntervale, setCurrentIntervale] = useState();

  // const [currentInterval, setCurrentInterval] = useState();
  // const [currentsIntervals, setCurrentsIntervals] = useState([]);
  // const [countdownTimestampMs, setCountdownTimestampMs] = useState(0);

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


  const startBoliranaTime = (currentHours, minutesTime) => {
    const totalMs = convertTimeToMs(currentHours, minutesTime);
    startBolirana(currentBolirana._id, totalMs).then(async (res) => {
      const data = res.json();
      if (res.ok) {
        getBoliranas();
        startTemp(currentBolirana);
      } else {
        alert(data.message);
      }
    });
  };

  // const handleSetTime = (currentHours, minutesTime) => {
  //   const totalMs = convertTimeToMs(currentHours, minutesTime);
  //   startBolirana(currentBolirana._id, totalMs).then(async (res) => {
  //     const data = res.json();
  //     if (res.ok) {
  //       getBoliranas();
  //       startTemp(currentBolirana);
  //     } else {
  //       alert(data.message);
  //     }
  //   });
  // }


  const resetCurrentBoliranaTime = () => {
    resetBolirana(currentBolirana._id).then(async (res) => {
      const data = res.json();
      if (res.ok) {
        // const interval = currentsIntervals.findIndex(
        //   (data) => data === currentInterval
        // );
        clearInterval(currentIntervale);
        openResetTimeModal();
        getBoliranas();
      } else {
        alert(data.message);
      }
    });
  };

  const startTemp = (bolirana) =>{
    const index = boliranas.findIndex((data) => data === bolirana);
    const startBoliranaTime = boliranas[index]
    console.log(boliranas)
    console.log(startBoliranaTime)

    // const intervalId = setInterval(() => {
    //   console.log(boliranas)
    //   console.log(startBoliranaTime)
    // }, 1000);

    const intervalId = setInterval(() => {
      // Aqui se activa el hilo de la bolirana
    }, 1000);
    setCurrentIntervale(intervalId);
    // useEffect(()=>{
      // return () => clearInterval(intervalId);
    // }, [boliranas])



    // const time = convertTimeToTemp(currentBolirana.init_time, currentBolirana.time)
    // console.log(time)

      // console.log(bolirana.init_time + " "+  bolirana.time)

    // console.log("Init time on " + bolirana.name);
    // console.log("Current time:  " + time);

    // socketTemp();
  }

  // const updateRemainingTime = (countdown) => {
  //   console.log(bolirana.name + " - Time: " + countdown);
  // };

  const socketTemp = (countdownTimestampMs) => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    currentBoliranasIntervals.push(intervalId);
    return () => clearInterval(intervalId);
  };

  const convertTimeToTemp = (initTime, time) => {
    const nowTime = new Date().getTime();
    let boliranaTime = time - (nowTime - initTime);

    if (boliranaTime < 0) {
      return false;
    }

    boliranaTime = boliranaTime / 1000;
    let hours = boliranaTime / (60 * 60);
    boliranaTime = boliranaTime % (60 * 60);
    let minutes = boliranaTime / 60;
    let seconds = boliranaTime % 60;

    const currentTime = { hours: hours, minutes: minutes, second: seconds };
    return currentTime;
  };

  const convertTimeToMs = (hours, minutes) => {
    const convertHoursToSeg = hours * 3600;
    const convertMinutesToSeg = minutes * 60;
    const convertTotalSegToMS = convertHoursToSeg + convertMinutesToSeg;
    return convertTotalSegToMS * 1000;
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
            convertTimeToMs={convertTimeToMs}
            startTemp={startTemp}
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
      <BoliranasTimeControlContainer
        boliranas={boliranas}
        handleResetTime={handleResetTime}
        handleStartTime={handleStartTime}
        // handleSetTime={handleSetTime}
      />
    </div>
  );
};

export default Boliranas;
