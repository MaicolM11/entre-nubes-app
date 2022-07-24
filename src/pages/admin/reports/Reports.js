import React from "react";
import "./Reports.css";
import styled from "styled-components";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";

const ReportsTableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ReportsCenterTableContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 55px;
  align-items: center;
  justify-content: center;
`;

const TableContainer = styled.div`
  display: flex;
  width: 870px;
  height: 585px;
  background-color: magenta;
`;

const Reports = () => {
  return (
    <div className="admin-reports-container">
      <Header
        title="Reportes"
        description="Información de los reportes de ventas diarias"
        component={<NotificationButton />}
      />
      <ReportsTableContainer>
        <ReportsCenterTableContainer>
          <TableContainer></TableContainer>
        </ReportsCenterTableContainer>
      </ReportsTableContainer>
    </div>
  );
};

export default Reports;
