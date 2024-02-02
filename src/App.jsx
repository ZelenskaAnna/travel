import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SplashScreen } from "./components/SplashScreen";
import { useState } from "react";
import { MenuIcon } from "./components/Icons/MenuIcon";
import { useLocation } from "react-router-dom";
import { TravelPage } from "./views/TravelPage/TravelPage";

function App() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const [isSpinner, setIsSpinner] = useState(true);

  setTimeout(() => {
    setIsSpinner(false);
  }, 3000);

  return (
    <>
      {!isSpinner && (
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/travel/:id" element={<TravelPage />}></Route>
          </Routes>
          {!currentUrl.startsWith("/travel") && (
            <header>
              <NavLink exact="true" activeClassName="is-active" to="/">
                <MenuIcon type="home" />
              </NavLink>
              <NavLink activeClassName="is-active" to="/history">
                <MenuIcon type="history" />
              </NavLink>
              <NavLink activeClassName="is-active" to="/heart">
                <MenuIcon type="heart" />
              </NavLink>
              <NavLink activeClassName="is-active" to="/profile">
                <MenuIcon type="profile" />
              </NavLink>
              {/* <NavLink className="header__logo">hdfjdgdj</NavLink> */}
            </header>
          )}
        </>
      )}
      {isSpinner && <SplashScreen />}
    </>
  );
}

export default App;
