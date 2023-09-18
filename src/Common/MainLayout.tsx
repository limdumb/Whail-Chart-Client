import { styled } from "styled-components";
import AsideBar from "./AsideBar/AsideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { useState } from "react";

const BodyContainer = styled.div`
  display: flex;
`;

export default function MainLayout() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  // 1. Header 에 햄버거 버튼을 눌렀을때
  // 1-1. isAsideOpen 상태값이 변경되고 상태값에 따른 랜더링이 발생한다
  // 1-2. 왼쪽에서 오른쪽으로 Slide형식으로 AsideBar가 열리게 한다
  const toggleAsideBar = () => {
    setIsAsideOpen(!isAsideOpen)
  }

  return (
    <BodyContainer>
      <Header toggleAsideBar={toggleAsideBar}/>
      <AsideBar toggleAsideBar={toggleAsideBar} isAsideOpen={isAsideOpen}/>
      <Outlet />
    </BodyContainer>
  );
}
