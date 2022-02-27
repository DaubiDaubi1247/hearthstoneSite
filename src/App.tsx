
import { Route, Routes } from 'react-router-dom';
import { MainWrapper } from './AppStyles';
import './AppStyles.ts';
import HeaderContainer from './components/header/HeaderContainer';
import CardInfoContainer from './components/main/CardInfoContainer';
import MainContainer from './main/MainInputContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <MainWrapper>
        <MainContainer/>
          <Routes>
            <Route path="/searchCard" element={<CardInfoContainer/>}/>
          </Routes>
      </MainWrapper>
    </div>
  );
}

export default App;
