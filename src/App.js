import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Akacoin from './components/Akacoin/Akacoin';
import Banner from './components/Banner/Banner';
import Wallets from './components/Wallet/Wallets';
import Guide from './components/Guide/Guide';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Akacoin />
      <Wallets />
      <Guide />
      <Footer />
    </div>
  );
}

export default App;
