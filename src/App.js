import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Learn from './components/Learn';
import Navbar from './components/Navbar/Navbar';
import Buy from './components/Buy';
import Community from './components/Community';
import Dashbord from './dashbord/Dashbord';
import AddCard from './dashbord/AddCard';
import MyCart from './dashbord/MyCart';
import AllCoin from './dashbord/AllCoin';
import AddCoin from './dashbord/AddCoin';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path="/learn" element={<Learn />} ></Route>
        <Route path="/buy" element={<Buy />} ></Route>
        <Route path="/community" element={<Community />} ></Route>

        <Route path="dashbord" element={<Dashbord />} >

          <Route path='addcard' element={<AddCard />} ></Route>
          <Route path='mycard' element={<MyCart />} ></Route>
          <Route path='allcoin' element={<AllCoin />} ></Route>
          <Route path='addcoin' element={<AddCoin />} ></Route>

        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
