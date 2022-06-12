import { ReactComponent as BasketShopping } from "../assets/icons/basket-shopping.svg";
import { ReactComponent as BarChart } from "../assets/icons/bar-chart.svg";
import { ReactComponent as WineBottle } from "../assets/icons/wine-bottle.svg";
import { ReactComponent as Users } from "../assets/icons/users.svg";
import { ReactComponent as Frog } from "../assets/icons/frog.svg";

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
    path: "/admin/employees",
    icon: <Users />,
    text: "Colaboradores",
  },
  {
    path: "/admin/boliranas",
    icon: <Frog />,
    text: "Boliranas",
  },
];
