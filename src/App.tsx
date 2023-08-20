import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MelonChart from "./Platform/Melon/MelonChart";
import MainChart from "./MainChart/MainChart";
import BugsChart from "./Platform/Bugs/BugsChart";
import FloChart from "./Platform/Flo/FloChart";
import GenieChart from "./Platform/Genie/GenieChart";
import VibeChart from "./Platform/Vibe/VibeChart";
import styled from "styled-components";
import MainLayout from "./Common/MainLayout";

const BodyContainer = styled.div`
  height: 100%;
  background-color: #f9fbfd;
  min-height: 100vh;
`;

export const PageLayoutContainer = styled.div`
  margin-left: 260px;
  margin-top: 81px;
  padding: 35px;
`

function App() {
  return (
    <BrowserRouter>
      <BodyContainer>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<MainChart />} path="/" />
            <Route element={<MelonChart />} path="/melon/chart" />
            <Route element={<BugsChart />} path="/bugs/chart" />
            <Route element={<FloChart />} path="/flo/chart" />
            <Route element={<GenieChart />} path="/genie/chart" />
            <Route element={<VibeChart />} path="/vibe/chart" />
          </Route>
        </Routes>
      </BodyContainer>
    </BrowserRouter>
  );
}

export default App;
