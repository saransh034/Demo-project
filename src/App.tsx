import './App.css'

import Header from './components/Header';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import PopularProduct from './components/PopularProduct';



function App() {
  return (
   <div className='App'>
    <Header/>
    <NavBar/>
    <Banner/>
    <PopularProduct/>
   </div>
  );
}

export default App;
