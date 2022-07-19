import { ReactComponent as WelcomeAdmin } from "../assets/images/welcome-admin.svg";
import { ReactComponent as WelcomeSalesman } from "../assets/images/welcome-salesman.svg";

export const WelcomeAdminPageMessage = {
  img: <WelcomeAdmin />,
  title: "Bienvenido al Sistema Administrador de",
  subTitle: "Entre Nubes",
  description: `Aquí podrá observar los pedidos del Bar en tiempo real, los
  productos actuales, el estado de las boliranas, reporte de ventas
  y los colaboradores contratados.`,
};

export const WelcomeSalesmanPageMessage = {
  img: <WelcomeSalesman />,
  title: "Bienvenido al Sistema Colaborador de",
  subTitle: "Entre Nubes",
  description: `Aquí podrá atender los pedidos del Bar, controlar el tiempo de las boliranas y registrar los clientes deudores del bar.`,
};
