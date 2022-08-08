import React, { useEffect, useState } from "react";
import { getAllProducts, filterProducts } from "../../../services/product";
import { getAllCategories } from "../../../services/category";
import {
  getAllSalesToDay,
  getBillById,
  assignBill,
  payment,
} from "../../../services/bill";
import { getAllDebtors } from "../../../services/debtor";
import {
  useSuccessfulOpenModal,
  useWarningOpenModal,
} from "../../../hooks/useOpenModal";

import "./Orders.css";
import {
  PageOptionsContainer,
  PageOptionsCenterContainer,
} from "../../../components/styles/style-components";
import { colors } from "../../../components/styles/colors";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import Button from "../../../components/buttons/Button";
import OrdersSalesmanCardsContainer from "../../../components/cards-container/OrdersSalesmanCardsContainer";
import CreateOrderModal from "../../../components/modals/CreateOrderModal";
import OrderProductListModal from "../../../components/modals/OrderProductListModal";
import PayOptionsModal from "../../../components/modals/PayOptionsModal";
import PayModeModal from "../../../components/modals/PayModeModal";
import DebtorAssignModal from "../../../components/modals/DebtorAssignModal";
import SuccessfulModal from "../../../components/modals/SuccessfulModal";
import SuccessfulDebtorModal from "../../../components/modals/SuccessfulDebtorModal";
import WarningModal from "../../../components/modals/WarningModal";
import EmptyMessage from "../../../components/empty-message/EmptyMessage";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import { ReactComponent as EmptyOrders } from "../../../assets/images/empty-products.svg";

const Orders = ({ salesmanName }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [debtor, setDebtor] = useState({});
  const [debtors, setDebtors] = useState({});
  const [getBills, setBills] = useState([]);
  const [bill, setBill] = useState();
  const [productsSale, setProductsSale] = useState([]);
  const [selected, setSelected] = useState({ name: "Categoría", id: "" });

  const [isOpenCreateOrderModal, setIsOpenCreateOrderModal] = useState(false);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);
  const [isOpenPayOptionsModal, setIsOpenPayOptionsModal] = useState(false);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);
  const [isOpenDebtorAssignModal, setIsOpenDebtorAssignModal] = useState(false);
  const {
    isOpenProductsWarningModal,
    isProductsWarningModalState,
    isOpenPlaceWarningModal,
    isPlaceWarningModalState,
    isOpenNoDebtorModal,
    isNoDebtorModalState,
  } = useWarningOpenModal();
  const {
    isOpenSuccessfulDebtorModal,
    isSuccessfulDebtorModalState,
    isOpenSuccessfulPayModal,
    isSuccessfulPayModalState,
  } = useSuccessfulOpenModal();

  const closeDebtorAssignModal = () => {
    setIsOpenDebtorAssignModal((isOpen) => !isOpen);
  };

  const openDebtorAssignModal = () => {
    setIsOpenPayOptionsModal(false);
    closeDebtorAssignModal();
  };

  const openPayModeModal = () => {
    setIsOpenPayOptionsModal(false);
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const openCreateOrderModal = () => {
    setIsOpenCreateOrderModal((isOpen) => !isOpen);
  };

  const openOrderModal = () => {
    getProductos();
    openCreateOrderModal();
  };

  const isOpenProductList = () => {
    setIsOpenProductListModal(false);
  };

  const openPayOptionsModal = () => {
    setIsOpenPayOptionsModal((isOpen) => !isOpen);
  };

  const handlePayOptions = (bill) => {
    openPayOptionsModal();
    setBill(bill);
    getBillById(bill._id).then(async (res) => {
      setProductsSale(await res.json());
    });
  };

  const handleBackOrderOptionsOne = () => {
    setIsOpenPayOptionsModal(true);
    closeDebtorAssignModal();
  };

  const handleBackOrderOptionsTwo = () => {
    setIsOpenPayOptionsModal(true);
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const handleSubmitDebtorAssign = (currentDebtor, bill) => {
    if (!currentDebtor._id) {
      isNoDebtorModalState();
    } else {
      assignBill(bill._id, currentDebtor._id).then(async (res) => {
        if (res.ok) {
          setDebtor(currentDebtor);
          isSuccessfulDebtorModalState();
          updateBills();
          closeDebtorAssignModal();
        }
      });
    }
  };

  const handleSubmitPayment = (payMode) => {
    payment(bill._id, payMode).then(async () => {
      updateBills();
      setIsOpenPayModeModal((isOpen) => !isOpen);
      isSuccessfulPayModalState();
    });
  };

  const getCategories = () => {
    getAllCategories().then(async (res) => {
      setCategories(await res.json());
    });
  };

  const getDebtors = () => {
    getAllDebtors().then(async (res) => {
      setDebtors(await res.json());
    });
  };

  const getProductos = () => {
    getAllProducts().then(async (res) => {
      setProducts(await res.json());
    });
  };

  const showBill = (bill) => {
    setProductsSale([]);
    getBillById(bill._id).then(async (res) => {
      setProductsSale(await res.json());
    });
    setBill(bill);
    setIsOpenProductListModal((isOpen) => !isOpen);
  };

  const updateBills = () => {
    getAllSalesToDay().then(async (res) => {
      setBills(await res.json());
    });
  };

  const getFilterProducts = (idCategory, brand) => {
    filterProducts(idCategory, brand).then(async (res) => {
      setProducts(await res.json());
    });
  };

  useEffect(() => {
    getCategories();
    getDebtors();
    getProductos();
    updateBills();
  }, []);

  return (
    <div className="salesman-orders-container">
      <AnimatedModalContainer
        modal={
          <CreateOrderModal
            categories={categories}
            products={products}
            updateProducts={getProductos}
            setProducts={setProducts}
            selected={selected}
            setSelected={setSelected}
            handleCloseModal={openCreateOrderModal}
            updateBills={updateBills}
            updateListProductByFilter={getFilterProducts}
            isPlaceModalState={isPlaceWarningModalState}
            isProductsModalState={isProductsWarningModalState}
          />
        }
        isOpen={isOpenCreateOrderModal}
        setIsOpen={setIsOpenCreateOrderModal}
      />
      <AnimatedModalContainer
        modal={
          <OrderProductListModal
            bill={bill}
            productsSale={productsSale}
            handleCloseModal={isOpenProductList}
          />
        }
        isOpen={isOpenProductListModal}
        setIsOpen={setIsOpenProductListModal}
      />
      <AnimatedModalContainer
        modal={
          <PayOptionsModal
            openDebtorAssignModal={openDebtorAssignModal}
            openPayModeModal={openPayModeModal}
          />
        }
        isOpen={isOpenPayOptionsModal}
        setIsOpen={setIsOpenPayOptionsModal}
      />
      <AnimatedModalContainer
        modal={
          <DebtorAssignModal
            bill={bill}
            productsSale={productsSale}
            debtors={debtors}
            handleBackOrderOptions={handleBackOrderOptionsOne}
            handleSubmitDebtorAssign={handleSubmitDebtorAssign}
          />
        }
        isOpen={isOpenDebtorAssignModal}
        setIsOpen={setIsOpenDebtorAssignModal}
      />
      <AnimatedModalContainer
        modal={
          <PayModeModal
            handleSubmitPayment={handleSubmitPayment}
            handleBackOrderOptions={handleBackOrderOptionsTwo}
          />
        }
        isOpen={isOpenPayModeModal}
        setIsOpen={setIsOpenPayModeModal}
      />
      <AnimatedModalContainer
        modal={
          <WarningModal
            message="¡Aún no se ha agregado el lugar del pedido!"
            handleSubmitWarning={isPlaceWarningModalState}
          />
        }
        isOpen={isOpenPlaceWarningModal}
        setIsOpen={isPlaceWarningModalState}
      />
      <AnimatedModalContainer
        modal={
          <WarningModal
            message="¡Aún no se han agregado productos al pedido!"
            handleSubmitWarning={isProductsWarningModalState}
          />
        }
        isOpen={isOpenProductsWarningModal}
        setIsOpen={isProductsWarningModalState}
      />
      <AnimatedModalContainer
        modal={
          <WarningModal
            message="¡Aún no se ha asignado el deudor!"
            handleSubmitWarning={isNoDebtorModalState}
          />
        }
        isOpen={isOpenNoDebtorModal}
        setIsOpen={isNoDebtorModalState}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulDebtorModal
            debtorFullname={debtor.fullname}
            handleSubmitOk={isSuccessfulDebtorModalState}
          />
        }
        isOpen={isOpenSuccessfulDebtorModal}
        setIsOpen={isSuccessfulDebtorModalState}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡El pago se realizo correctamente!"
            handleSubmitOk={isSuccessfulPayModalState}
          />
        }
        isOpen={isOpenSuccessfulPayModal}
        setIsOpen={isSuccessfulPayModalState}
      />
      <Header
        title="Pedidos"
        description="Información de los pedidos realizados en el bar"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <PageOptionsContainer>
        <PageOptionsCenterContainer>
          <Button
            size="mediumButton"
            theme="ok"
            icon={<Add fill={colors.secondary} />}
            text="Agregar Pedido"
            onClick={openOrderModal}
          />
        </PageOptionsCenterContainer>
      </PageOptionsContainer>
      {getBills.length > 0 ? (
        <OrdersSalesmanCardsContainer
          bills={getBills}
          handleOpenProductList={showBill}
          handlePayOptions={handlePayOptions}
        />
      ) : (
        <EmptyMessage
          img={<EmptyOrders />}
          title="Sin Pedidos"
          description="Aún no existen pedidos por realizar."
        />
      )}
    </div>
  );
};

export default Orders;
