import { useState } from "react";

export function useWarningOpenModal() {
  const [isOpenProductsWarningModal, setIsOpenProductsWarningModal] =
    useState(false);
  const isProductsWarningModalState = () =>
    setIsOpenProductsWarningModal(!isOpenProductsWarningModal);

  const [isOpenPlaceWarningModal, setIsOpenPlaceWarningModal] = useState(false);
  const isPlaceWarningModalState = () =>
    setIsOpenPlaceWarningModal(!isOpenPlaceWarningModal);

  const [isOpenNoDebtorModal, setIsOpenNoDebtorModal] = useState(false);
  const isNoDebtorModalState = () =>
    setIsOpenNoDebtorModal(!isOpenNoDebtorModal);

  return {
    isOpenProductsWarningModal,
    isProductsWarningModalState,
    isOpenPlaceWarningModal,
    isPlaceWarningModalState,
    isOpenNoDebtorModal,
    isNoDebtorModalState,
  };
}

export function useSuccessfulOpenModal() {
  const [isOpenSuccessfulDebtorModal, setIsOpenSuccessfulDebtorModal] =
    useState(false);
  const isSuccessfulDebtorModalState = () =>
    setIsOpenSuccessfulDebtorModal(!isOpenSuccessfulDebtorModal);

  return {
    isOpenSuccessfulDebtorModal,
    isSuccessfulDebtorModalState,
  };
}
