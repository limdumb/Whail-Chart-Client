import { styled } from "styled-components";
interface ContourLineProps {
  color: string;
  thickness: number;
  opacity?: number
}
const Line = styled.div<ContourLineProps>`
  width: 100%;
  height: ${({ thickness }) => `${thickness}px`};
  background-color: ${({ color }) => color};
  opacity: ${(props)=>props.opacity ? props.opacity : NaN};
`;

export default function ContoureLine({ color, thickness, opacity }:ContourLineProps) {
  return <Line color={color} thickness={thickness} opacity={opacity} />;
}
