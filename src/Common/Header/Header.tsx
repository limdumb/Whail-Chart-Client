import { styled } from "styled-components";
import "./header.css";

const HeaderWrapper = styled.div`
  height: 81px;
  width: 100%;
  border-bottom: 1px solid rgb(237, 242, 249);
  position: fixed;
  background-color: #f9fbfd;
`;

export default function Header() {
  return <HeaderWrapper></HeaderWrapper>;
}
