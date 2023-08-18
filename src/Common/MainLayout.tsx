import { styled } from "styled-components";
import AsideBar from "./AsideBar/AsideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const BodyContainer = styled.div`
  display: flex;
`;

export default function MainLayout() {
  return (
    <BodyContainer>
      <Header/>
      <AsideBar />
      <Outlet />
    </BodyContainer>
  );
}
