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
  @media screen and (max-width: 390px) {
  }
`;

export const PageLayoutContainer = styled.div`
  margin-left: 260px;
  margin-top: 81px;
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 390px) {
    width: 390px;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    margin-top: 81px;
    .Chart_Container {
      display: flex;
      flex-direction: column;
    }
    .Last_Chart_Container {
      display: flex;
      flex-direction: column;
    }
    .Chart_Intro_Container{
      margin-top: 15px;
    }
  }
`;

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
