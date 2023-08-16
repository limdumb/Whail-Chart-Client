import { styled } from "styled-components";
import "./header.css";

const HeaderWrapper = styled.div`
  height: 81px;
  border-bottom: 1px solid rgb(237, 242, 249);
`;

export default function Header() {
  return <HeaderWrapper></HeaderWrapper>;
}
