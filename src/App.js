
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './componentes/Header';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Detalhes from './pages/detalhes';
import Footer from './componentes/Footer';
import Error from './pages/error';
function App() {
  return (
       <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detalhes/:id' element={<Detalhes />} />
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/error' element={<Error/>}/>
        </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;
