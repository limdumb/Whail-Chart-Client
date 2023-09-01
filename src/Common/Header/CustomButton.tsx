import { styled } from "styled-components";
import { AiFillCalendar } from "react-icons/ai";

interface ButtonPropsType {
  width: string;
  height: string;
}
interface Props extends ButtonPropsType {
  children: string;
  type: "button" | "calendar";
}

const Button = styled.button<ButtonPropsType>`
  padding: 6px 12px;
  border: 1px solid rgb(95, 118, 232);
  border-radius: 2em;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: white;
  color: rgb(95, 118, 232);
  font-size: 16px;
  font-weight: 400;
`;

export default function CustomButton(props: Props) {
  return (
    <>
      <Button width={props.width} height={props.height}>
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
