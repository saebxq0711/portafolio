import NavBar from './pages/NavBar';
import Banner from './pages/Banner';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App" bg="dark">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
