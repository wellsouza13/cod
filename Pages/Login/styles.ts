import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  justify-content: space-between;

  font-size: 14px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  background-color: white;
`;

export const HeadersStyles = styled.div`
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;

  img {
    width: 105px;
    display: block;
    padding: 0 10px;
  }
  /* height: 40px; */
`;

export const FormStyles = styled.div`
  /* background-color: red; */
`;

export const FooterStyles = styled.div`
  background-color: black;
  height: 40px;
`;
