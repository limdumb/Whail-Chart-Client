import { styled } from "styled-components";

const AsideBarWrapper = styled.aside`
  width: 260px;
  height: 100%;
  background-color: white;
  min-height: 100vh;
  box-shadow: 1px 0px 0px 0px rgb(237, 242, 249);
`;

export default function AsideBar(): JSX.Element {
  return <AsideBarWrapper></AsideBarWrapper>;
}
