import { styled } from "styled-components";

interface ImageProps {
  image: string;
  width: number;
  height: number;
  margin?: number;
  margintop?: number;
  marginbottom?: number;
  marginleft?: number;
  marginright?: number;
}

const Image = styled.img<ImageProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: ${(props) => `${props.margin}px`};
  margin-top: ${(props) => `${props.margintop}px`};
  margin-bottom: ${(props) => `${props.marginbottom}px`};
  margin-right: ${(props) => `${props.marginright}px`};
  margin-left: ${(props) => `${props.marginleft}px`};
`;

export default function CustomImage(props: ImageProps) {
  return (
    <>
      <Image {...props} src={props.image} />
    </>
  );
}
