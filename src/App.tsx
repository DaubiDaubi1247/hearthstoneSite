
import { Route, Routes } from 'react-router-dom';
import { MainWrapper } from './AppStyles';
import './AppStyles.ts';
import HeaderContainer from './components/header/HeaderContainer';
import MainContainer from './components/hearthstone/MainInputContainer';
import CardInfoWrapper from './components/card/tempWrapper.tsx/cardInfoWrapper';
import EpicGamesContainer from './components/epicGames/epicGamesContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <MainWrapper>
          <Routes>
            <Route path="/hearthstone" element={<MainContainer/>}/>
            <Route path="/hearthstone/searchCard" element={<CardInfoWrapper/>}/>
            <Route path="/epicGames" element={<EpicGamesContainer/>}/>
          </Routes>
      </MainWrapper>
    </div>
  );
}

export default App;
