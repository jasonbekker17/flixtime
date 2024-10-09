import AllRoutes from './routes/AllRoutes';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>

      <Footer/>
      <ScrollToTop/>

  
    </div>
  );
}

export default App;
