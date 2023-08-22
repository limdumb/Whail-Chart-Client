import { styled } from "styled-components";

interface PageButtonProps {
  pages: number;
  active: boolean;
  onClick: Function;
}

interface PageCountButtonProps {
  active: boolean;
  onClick: Function;
}

const PageCountButton = styled.button<PageCountButtonProps>`
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: ${(props) => (props.active ? "#fff" : "#5f76e8")};
  background-color: ${(props) => (props.active ? "#5f76e8" : "#fff")};
  border: ${(props) =>
    props.active ? "1px solid #5f76e8" : "1px solid #dee2e6"};
  cursor: pointer;
`;

export const PageButton = (props: PageButtonProps) => {
  return (
    <PageCountButton active={props.active} onClick={props.onClick}>
      {props.pages}
    </PageCountButton>
  );
};
