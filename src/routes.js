import { Main } from "./pages/Main/Main";
import { NotFound } from "./pages/NotFound/NotFound";

export const Routes = [
  {
    name: 'Main page',
    path: '/',
    exact: true,
    component: Main
  },
  {
    name: '404 page',
    component: NotFound
  },
];