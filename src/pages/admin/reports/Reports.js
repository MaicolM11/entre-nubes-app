import React from "react";
import "./Reports.css";
import styled from "styled-components";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";

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

const TableFilterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: hotpink;
`;

const TableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  background-color: darkslateblue;
`;

const Reports = () => {
  return (
    <div className="admin-reports-container">
      <Header
        title="Reportes"
        description="Información de los reportes de ventas diarias"
        component={<NotificationButton />}
      />
      <ReportsContainer>
        <ReportsCenterContainer>
          <ReportsTableContainer>
            <TableFilterContainer></TableFilterContainer>
            <TableContainer></TableContainer>
          </ReportsTableContainer>
        </ReportsCenterContainer>
      </ReportsContainer>
    </div>
  );
};

export default Reports;
