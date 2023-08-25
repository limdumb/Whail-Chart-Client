import { styled } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";

import "./header.css";

const HeaderWrapper = styled.div`
  height: 81px;
  width: 100%;
  border-bottom: 1px solid rgb(237, 242, 249);
  position: fixed;
  background-color: #f9fbfd;
  @media screen and (max-width: 390px) {
    width: 390px;
    display: flex;
    justify-content: space-between
  };
`;

const LogoWrapper = styled.div`
  width: 260px;
  height: 100%;
  @media screen and (max-width: 390px) {
    width: 230px;
  }
`

const LogoImg = styled.img`
  width: 260px;
  height: 100%;
  @media screen and (max-width: 390px) {
    width: 230px;
  }
`;

const MenuIconWrapper = styled.div`
display: none;
@media screen and (max-width: 390px) {
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`

export default function Header() {
  return (
    <HeaderWrapper>
      <MenuIconWrapper>
        <AiOutlineMenu size={16} fontWeight={600}/>
      </MenuIconWrapper>
      <LogoWrapper>
        <LogoImg src="이미지" />
      </LogoWrapper>
      <MenuIconWrapper>
        <CiCircleMore size={16} fontWeight={600}/>
      </MenuIconWrapper>
    </HeaderWrapper>
  );
}
