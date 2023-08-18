import { styled } from "styled-components";

interface SpanProps {
  fontSize: number;
  children: string;
  color?: string;
  fontWeight?: number;
  margin?: number;
  marginT?: number;
  marginB?: number;
  marginL?: number;
  marginR?: number;
}

const SpanElement = styled.span<SpanProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => (props.margin ? `${props.margin}px` : "0px")};
  margin-top: ${(props) => (props.marginT ? `${props.marginT}px` : "0px")};
  margin-bottom: ${(props) => (props.marginB ? `${props.marginB}px` : "0px")};
  margin-left: ${(props) => (props.marginL ? `${props.marginL}px` : "0px")};
  margin-right: ${(props) => (props.marginR ? `${props.marginR}px` : "0px")};
`;

export const CustomSpan = ({
  fontSize,
  children,
  color,
  fontWeight,
  margin,
  marginB,
  marginL,
  marginR,
  marginT,
}: SpanProps) => {
  return (
    <SpanElement
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      margin={margin}
      marginB={marginB}
      marginL={marginL}
      marginR={marginR}
      marginT={marginT}
    >
      {children}
    </SpanElement>
  );
};
