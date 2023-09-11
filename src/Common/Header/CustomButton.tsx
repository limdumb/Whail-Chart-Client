import { styled } from "styled-components";
import { AiFillCalendar } from "react-icons/ai";

interface ButtonPropsType {
  width: string;
  height: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: number;
  borderRadius?: string;
}
interface Props extends ButtonPropsType {
  children: string;
  type: "button" | "calendar";
}

const Button = styled.button<ButtonPropsType>`
  cursor: pointer;
  padding: 6px 12px;
  border: 1px solid rgb(95, 118, 232);
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "2em"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "rgb(95, 118, 232);")};
  font-size: 16px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
`;

export default function CustomButton(props: Props) {
  return (
    <>
      <Button
      borderRadius={props.borderRadius}
        fontWeight={props.fontWeight}
        color={props.color}
        width={props.width}
        height={props.height}
        backgroundColor={props.backgroundColor}
      >
        {props.children}
        {props.type === "calendar" ? (
          <AiFillCalendar
            size={16}
            style={{ position: "relative", top: 2, left: 4 }}
          />
        ) : null}
      </Button>
    </>
  );
}
