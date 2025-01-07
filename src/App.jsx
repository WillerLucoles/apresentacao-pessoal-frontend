import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <main className="flex flex-col md:flex-row h-screen" id="Home">
      <div className="md:w-2/5 h-full md:fixed">
        <img src="src/assets/Mockup_Willer.png" alt="Willer Lucoles" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-3/5 md:ml-auto md:overflow-y-scroll bg-[url('src/assets/Background.webp')] bg-cover bg-center">
        <div>
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