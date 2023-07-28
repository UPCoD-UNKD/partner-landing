import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Parthners from './Common/Parthners/Parthners';
import MainPage from './Components/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

const partn = ['OLX', 'PROM', 'ROZETKA', 'ALLO', 'EVO', 'PROZORRO', 'MODNAKASTA', 'ZAKUPKI.COM.UA']

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Banner />
        <Parthners parthners={partn}/>
        <MainPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
