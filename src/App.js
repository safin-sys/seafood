import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './components/Main';
import Navbar from './components/Navbar';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  .container {
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .container {
      width: 85%;
    }
  }
`;

function App() {
  const [sidebar, setSidebar] = useState(false);

  function handleSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <React.Fragment>
      <Global />
      <Navbar 
        handleSidebar={handleSidebar}
        sidebar={sidebar}
      />
      <Main 
        sidebar={sidebar}
      />
    </React.Fragment>
  );
}

export default App;
