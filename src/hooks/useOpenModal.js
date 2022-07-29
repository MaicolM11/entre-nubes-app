import { useState } from "react";

export function useWarningOpenModal() {
  const [isOpenProductsWarningModal, setIsOpenProductsWarningModal] =
    useState(false);
  const isProductsWarningModalState = () =>
    setIsOpenProductsWarningModal(!isOpenProductsWarningModal);

  const [isOpenPlaceWarningModal, setIsOpenPlaceWarningModal] = useState(false);
  const isPlaceWarningModalState = () =>
    setIsOpenPlaceWarningModal(!isOpenPlaceWarningModal);

  return {
    isOpenProductsWarningModal,
    isProductsWarningModalState,
    isOpenPlaceWarningModal,
    isPlaceWarningModalState,
  };
}
