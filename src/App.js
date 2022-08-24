import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Container, Content } from "./Pages/Up/Styles";

function App() {
  return (
    <div>
      <Routes />
      <Container>
        <Content> Clique para fazer o upload do Arquivo</Content>
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default App;
