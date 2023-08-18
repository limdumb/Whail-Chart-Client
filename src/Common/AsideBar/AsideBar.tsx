import { styled } from "styled-components";
import AsideTabBox from "./TabBox";
import { pleftformValue } from "../../Function/pletformValue";

const AsideBarWrapper = styled.aside`
  width: 260px;
  height: 100%;
  background-color: white;
  min-height: 100vh;
  box-shadow: 1px 0px 0px 0px rgb(237, 242, 249);
  padding-top: 30px;
`;

export default function AsideBar(): JSX.Element {
  const pleftformArray = pleftformValue();

  return (
    <AsideBarWrapper>
      {pleftformArray.map((el) => {
        return <AsideTabBox key={el.name} pletform={el.name} />;
      })}
    </AsideBarWrapper>
  );
}