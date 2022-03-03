
import { Route, Routes } from 'react-router-dom';
import { MainWrapper } from './AppStyles';
import './AppStyles.ts';
import HeaderContainer from './components/header/HeaderContainer';
import MainContainer from './components/main/MainInputContainer';
import CardInfoWrapper from './components/card/tempWrapper.tsx/cardInfoWrapper';
import MainContentContainer from './components/main/mainContent/mainContenContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <MainWrapper>
        <MainContainer/>
          <Routes>
            <Route path="/" element={<MainContentContainer/>}/>
            <Route path="/searchCard" element={<CardInfoWrapper/>}/>
          </Routes>
      </MainWrapper>
    </div>
  );
}

export default App;
