import { ReactComponent as BasketShopping } from "../assets/icons/basket-shopping.svg";
import { ReactComponent as BarChart } from "../assets/icons/bar-chart.svg";
import { ReactComponent as WineBottle } from "../assets/icons/wine-bottle.svg";
import { ReactComponent as Users } from "../assets/icons/users.svg";
import { ReactComponent as Frog } from "../assets/icons/frog.svg";
import { ReactComponent as MoneyBillWave } from "../assets/icons/money-bill-wave.svg";

export const AdminLinks = [
  {
    path: "/admin/orders",
    icon: <BasketShopping />,
    text: "Pedidos",
  },
  {
    path: "/admin/reports",
    icon: <BarChart />,
    text: "Reportes",
  },
  {
    path: "/admin/products",
    icon: <WineBottle />,
    text: "Productos",
  },
  {
    path: "/admin/salesmans",
    icon: <Users />,
    text: "Vendedores",
  },
  {
    path: "/admin/boliranas",
    icon: <Frog />,
    text: "Boliranas",
  },
];

export const SalesmanLinks = [
  {
    path: "/salesman/orders",
    icon: <BasketShopping />,
    text: "Pedidos",
  },
  {
    path: "/salesman/debtors",
    icon: <MoneyBillWave />,
    text: "Deudores",
  },
  {
    path: "/salesman/boliranas",
    icon: <Frog />,
    text: "Boliranas",
  },
];
