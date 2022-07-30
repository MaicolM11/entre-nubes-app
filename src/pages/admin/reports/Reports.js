import React, { useState } from "react";
import "./Reports.css";
import styled from "styled-components";
import {
  PageOptionsCenterContainer,
  PageOptionsContainer,
} from "../../../components/styles/style-components";
import Button from "../../../components/buttons/Button";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar-check.svg";

const ReportsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ReportsCenterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 55px;
  align-items: center;
  justify-content: center;
`;

const ReportsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 870px;
  height: 585px;
  gap: 25px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 25px;
`;

const TableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  background-color: darkslateblue;
`;

const DateInputContainer = styled.input`
  display: flex;
  width: 250px;
  height: 35px;
  max-height: 45px;
  background-color: greenyellow;
`;

const Reports = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateFilter = () => {
    console.log("Fecha de inicio: " + startDate);
    console.log("Fecha de fin: " + endDate);
  };

  return (
    <div className="admin-reports-container">
      <Header
        title="Reportes"
        description="Información de los reportes de ventas diarias"
        component={<NotificationButton />}
      />
      <PageOptionsContainer>
        <PageOptionsCenterContainer>
          <FilterContainer>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack direction="row" spacing={3}>
                <DatePicker
                  label="Desde"
                  value={startDate}
                  minDate={new Date("2016-01-01")}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                  label="Hasta"
                  value={endDate}
                  minDate={new Date("2016-01-01")}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <Button
              size="optionButton"
              theme="highlighted"
              icon={<Calendar fill="white" />}
              text="Filtrar"
              onClick={handleDateFilter}
            />
          </FilterContainer>
        </PageOptionsCenterContainer>
      </PageOptionsContainer>
      <ReportsContainer>
        {/* <ReportsCenterContainer>
          <ReportsTableContainer>
           
            <TableContainer></TableContainer>
          </ReportsTableContainer>
        </ReportsCenterContainer> */}
      </ReportsContainer>
    </div>
  );
};

export default Reports;
