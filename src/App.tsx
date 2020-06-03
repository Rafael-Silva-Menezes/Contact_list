import React from "react";
import { createGlobalStyle } from "styled-components";
import Contacts from "./containers/Contacts";

const App = () => {
  return (
    <>
      <Contacts />
      <Styles />
    </>
  );
};

const Styles = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: sans-serif
  }

  html,body, #root{
    height: 100%
  }

  body{
    margin: 0;
  }

`;

export default App;
