import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
  const [sidebar, setSidebar] = useState(window.innerWidth < 768 ? false : true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const res = await fetch('recipe.json');
      const data = await res.json();
      setRecipes(data);
    }
    callAPI();
  }, []);

  function handleSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <React.Fragment>
      <Router>
        <Global />
        <Navbar 
          handleSidebar={handleSidebar}
          sidebar={sidebar}
        />
        <Main 
          sidebar={sidebar}
          recipes={recipes}
        />
      </Router>
    </React.Fragment>
  );
}

export default App;
