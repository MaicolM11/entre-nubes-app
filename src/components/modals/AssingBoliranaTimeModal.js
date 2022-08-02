import React, { useState } from "react";
import useAssingBoliranaTime from "../../validate-forms/useAssingBoliranaTime";

import styled from "styled-components";
import { colors } from "../styles/colors";
import DataInput from "../inputs/DataInput";
import Button from "../buttons/Button";
import CloseButton from "../buttons/CloseButton";
import {
  ErrorMessageContainer,
  ErrorMessage,
  ErrorMessageSpace,
  ModalTitle,
} from "../styles/style-components";
import { ReactComponent as Timer } from "../../assets/icons/timer.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddBoliranaModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const HeaderModalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 35px 0 35px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

const ModalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const InputsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const AssingBoliranaTimeModal = ({ bolirana, setIsOpenAssingBoliranaTime }) => {
  const [hour, setHour] = useState(0);

  const handleSubmitAssingCurrentBoliranaTime = () => {
    startBoliranaTime();
  };

  const {
    boliranaTime,
    handleChangeBoliranaTime,
    handleSubmitBoliranaTime,
    errors,
    clearInputBoliranaTime,
  } = useAssingBoliranaTime(hour, handleSubmitAssingCurrentBoliranaTime);

  const handleSetIsOpen = () => {
    setIsOpenAssingBoliranaTime();
    clearInputBoliranaTime();
  };

  const startBoliranaTime = () => {
    console.log("Bolirana: " + bolirana.name);
    console.log("Horas: " + hour);
    console.log("Minutos: " + boliranaTime.minutesTime);
    setIsOpenAssingBoliranaTime();
  };

  const handleChange = (event) => {
    setHour(event.target.value);
  };

  return (
    <AddBoliranaModalContainer>
      <HeaderModalContainer>
        <ModalTitle>Asignar Tiempo</ModalTitle>
        <CloseButton onClick={handleSetIsOpen} />
      </HeaderModalContainer>
      <ModalContainer>
        <ModalInfoContainer>
          <InputsContainer>
            <FormControl sx={{ minWidth: 175, textAlign: "center" }}>
              <Select
                value={hour}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(selected) => {
                  if (selected === 0) {
                    return <label>Horas</label>;
                  }
                  return selected;
                }}
                sx={{ borderRadius: 6, maxHeight: 45 }}
              >
                {[...Array(25)].map((data, i) => {
                  return (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <ErrorMessageContainer>
              <DataInput
                size="timeInput"
                icon={<Timer />}
                isFill={true}
                type="text"
                name="minutesTime"
                placeholder="Minutos"
                onChange={handleChangeBoliranaTime}
              />
              {errors.minutesTime ? (
                <ErrorMessage>{errors.minutesTime}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
          </InputsContainer>
          <Button
            size="assingTimeButton"
            theme="ok"
            text="Asignar Tiempo"
            onClick={handleSubmitBoliranaTime}
          />
        </ModalInfoContainer>
      </ModalContainer>
    </AddBoliranaModalContainer>
  );
};

export default AssingBoliranaTimeModal;
