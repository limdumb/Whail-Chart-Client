import { styled } from "styled-components";
import { AiFillCalendar } from "react-icons/ai";

interface ButtonPropsType {
  width: string;
  height: string;
  backgroundcolor?: string;
  color?: string;
  fontWeight?: number;
  borderradius?: string;
}
interface Props extends ButtonPropsType {
  children: string;
  type: "button" | "calendar";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = styled.button<ButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 6px 12px;
  border: 1px solid rgb(95, 118, 232);
  border-radius: ${(props) =>
    props.borderradius ? props.borderradius : "2em"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "white"};
  color: ${(props) => (props.color ? props.color : "rgb(95, 118, 232);")};
  font-size: 16px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
`;

export default function CustomButton(props: Props) {
  return (
    <>
      <Button
        borderradius={props.borderradius}
        fontWeight={props.fontWeight}
        color={props.color}
        width={props.width}
        height={props.height}
        backgroundcolor={props.backgroundcolor}
        onClick={props.onClick}
      >
        {props.children}
        {props.type === "calendar" ? (
          <AiFillCalendar
            size={17}
            style={{ position: "relative", top: -0.3, left: 4 }}
          />
        ) : null}
      </Button>
    </>
  );
}
