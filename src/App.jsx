import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import MockupWiller from './assets/Mockup_Willer.png';
import BackgroundImage from './assets/Background.webp';

function App() {
  return (
    <main className="flex flex-col md:flex-row h-screen" id="Home">
      <div className="md:w-2/5 h-full md:fixed">
        <img src={MockupWiller} alt="Willer Lucoles" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-3/5 md:ml-auto md:overflow-y-scroll bg-cover bg-center relative">
        <img src={BackgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10">
          <Header />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;