import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 400;
  }
  button {
    background-color: #C71585;
    padding: 6px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      background-color: #C71585;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;