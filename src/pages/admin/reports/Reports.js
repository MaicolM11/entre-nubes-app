import React, { useState, useEffect } from "react";
import { getAllReports, filterReports } from "../../../services/report";

import "./Reports.css";
import styled from "styled-components";
import {
  PageOptionsCenterContainer,
  PageOptionsContainer,
} from "../../../components/styles/style-components";
import Button from "../../../components/buttons/Button";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import ReportsTable from "../../../components/tables/ReportsTable";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar-check.svg";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { es } from "date-fns/locale";

const ReportsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
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
  padding: 25px 55px;
`;

const Reports = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currentReports, setCurrentReports] = useState([]);

  const handleDateFilter = () => {
    const start = startDate.toLocaleDateString("es-MX").split("").reverse().join("");
    const end = endDate.toLocaleDateString("es-MX").split("").reverse().join("");
    filterReports(start, end).then(async (res) =>{
      setCurrentReports(await res.json())
    })
  };

  const loadReports = () => {
    getAllReports().then(async (res) => {
      setCurrentReports(await res.json());
    });
  };

  useEffect(() => {
    loadReports();
  }, []);

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
            <LocalizationProvider
              adapterLocale={es}
              dateAdapter={AdapterDateFns}
            >
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
        <TableContainer>
          <ReportsTable data={currentReports} />
        </TableContainer>
      </ReportsContainer>
    </div>
  );
};

export default Reports;
