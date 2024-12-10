import L1HomePage from "@/pages/L1HomePage";
import { Route, Routes as RouterRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<L1HomePage />} />
    </RouterRoutes>
  );
};

export default Routes;
