import React from "react";
import styled from "styled-components";

import { colors } from "../styles/colors";
import { ReactComponent as SalesmanPhoto } from "../../assets/images/salesman-photo.svg";

const SalesmanDataContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

const SalesmanPhotoContainer = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
`;

const SalesmanNameContainer = styled.label`
  color: ${colors.brand};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const SalesmanData = ({ salesmanName }) => {
  return (
    <SalesmanDataContainer>
      <SalesmanPhotoContainer>
        <SalesmanPhoto />
      </SalesmanPhotoContainer>
      <SalesmanNameContainer>{salesmanName}</SalesmanNameContainer>
    </SalesmanDataContainer>
  );
};

export default SalesmanData;
