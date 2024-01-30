import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { AndesPage } from "./views/TravelPage/Andes/AndesPage";
import { SplashScreen } from "./components/SplashScreen";
import { useState } from "react";
import { MenuIcon } from "./components/Icons/MenuIcon";
import { useLocation } from "react-router-dom";
import { FujiPage } from "./views/TravelPage/Fuji/FujiPage";

function App() {
  const location = useLocation();
  const currentUrl = location.pathname;

  console.log(currentUrl);
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
            <Route path="/andes" element={<AndesPage />}></Route>
            <Route path="/fuji" element={<FujiPage />}></Route>
          </Routes>
          {currentUrl !== "/andes" && currentUrl !== "/fuji" && (
            <header>
              {/* <Link to="/travel"><MenuIcon type='home'/></Link> */}
              <NavLink exact="true" activeclassname="is-active" to="/">
                <MenuIcon type="home" />
              </NavLink>
              <NavLink activeclassname="is-active" to="/history">
                <MenuIcon type="history" />
              </NavLink>
              <NavLink activeclassname="is-active" to="/heart">
                <MenuIcon type="heart" />
              </NavLink>
              <NavLink activeclassname="is-active" to="/profile">
                <MenuIcon type="profile" />
              </NavLink>
            </header>
          )}
        </>
      )}
      {isSpinner && <SplashScreen />}
    </>
  );
}

export default App;
