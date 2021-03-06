import styled, { css } from "styled-components";

export const Container = styled.div`
  color: ${(props) =>
    props.colorSchema
      ? "var(--color-primary-two)"
      : "var(--color-base-default)"};
  text-align: left;
  font-family: var(--font-text-primary);
  font-size: 1.1rem;
  font-weight: 400;

  div {
    span {
      color: var(--color-error);
      font-size: 1rem;
    }
  }
`;

export const InputContainer = styled.div`
  background-color: ${(props) =>
    props.colorSchema ? "var(--color-text-two)" : "var(--color-base-default)"};
  border-radius: 8px;
  color: var(--color-placeholder);
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 300ms ease-in-out;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid var(--color-error);
      svg {
        color: var(--color-error);
      }
    `}

  input {
    font-family: var(--font-text-secondary);
    font-weight: 600;
    font-size: 1.1rem;
    width: 100%;
    background-color: ${(props) =>
      props.colorSchema
        ? "var(--color-text-two)"
        : "var(--color-base-default)"};
    align-items: center;
    flex: 1;
    border: 0;
    outline: none;
    color: var(--color-placeholder);
    &::placeholder {
      color: var(--color-placeholder);
    }
  }
  svg {
    color: var(--color-placeholder);
    margin-right: 16px;
  }
`;
