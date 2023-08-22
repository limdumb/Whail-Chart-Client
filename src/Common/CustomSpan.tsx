import { styled } from "styled-components";

interface SpanProps {
  fontSize: number;
  children: string;
  color?: string;
  fontWeight?: number;
  margin?: number;
  margintop?: number;
  marginbottom?: number;
  marginleft?: number;
  marginright?: number;
}

const SpanElement = styled.span<SpanProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) => `${props.fontSize}px`};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => `${props.margin}px`};
  margin-top: ${(props) => `${props.margintop}px`};
  margin-bottom: ${(props) => `${props.marginbottom}px`};
  margin-left: ${(props) => `${props.marginleft}px`};
  margin-right: ${(props) => `${props.marginright}px`};
`;

export const CustomSpan = ({
  fontSize,
  children,
  color,
  fontWeight,
  margin,
  marginbottom,
  marginleft,
  marginright,
  margintop,
}: SpanProps) => {
  return (
    <SpanElement
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      margin={margin}
      marginbottom={marginbottom}
      marginleft={marginleft}
      marginright={marginright}
      margintop={margintop}
    >
      {children}
    </SpanElement>
  );
};
