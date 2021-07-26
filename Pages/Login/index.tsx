import React from "react";

import { Container, HeadersStyles, FormStyles, FooterStyles } from "./styles";
import cod from "../../components/assets/cod-logo-white.svg";

const login: React.FC = () => {
  return (
    <>
      <Container>
        <HeadersStyles>
          <header>
            <img src={cod} />
            <h1>Call of Duty</h1>
          </header>
        </HeadersStyles>
        <FormStyles>
          <form></form>
        </FormStyles>
        <FooterStyles>
          <footer></footer>
        </FooterStyles>
      </Container>
    </>
  );
};

export default login;
