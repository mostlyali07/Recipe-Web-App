import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import Logo from "./Imgs/main-logo.png";

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin: 20px;
  text-align: center;
`;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <LogoImage src={Logo} alt="Your Logo" />
        </Link>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
