import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Favourite from './components/Favourite/Favourite.js';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound.js';

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
