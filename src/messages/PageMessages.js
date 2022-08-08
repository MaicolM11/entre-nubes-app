import { ReactComponent as WelcomeAdmin } from "../assets/images/welcome-admin.svg";
import { ReactComponent as WelcomeSalesman } from "../assets/images/welcome-salesman.svg";
import { ReactComponent as PageNotFound } from "../assets/images/status-page-not-found.svg";

export const WelcomeAdminPageMessage = {
  img: <WelcomeAdmin width={375} height={375} />,
  title: "Bienvenido al Sistema Administrador de",
  subTitle: "Entre Nubes",
  description: `Aquí podrá observar los pedidos del Bar en tiempo real, los
  productos actuales, el estado de las boliranas, reporte de ventas
  y los colaboradores contratados.`,
};

export const WelcomeSalesmanPageMessage = {
  img: <WelcomeSalesman width={375} height={375} />,
  title: "Bienvenido al Sistema Colaborador de",
  subTitle: "Entre Nubes",
  description: `Aquí podrá atender los pedidos del Bar, controlar el tiempo de las boliranas y registrar los clientes deudores del bar.`,
};

export const PageNotFoundMessage = {
  img: <PageNotFound width={375} height={375} />,
  title: "Página no encontrada",
  description: `Tal vez las bebidas te están dando ánimos para estar aquí, pero la subida de nivel está Entre Nubes, regresa al bar y continúa alegrando los momentos.`,
};
