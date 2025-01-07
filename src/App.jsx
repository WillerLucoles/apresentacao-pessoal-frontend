import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

function App() {

  return (
    <>
      <main>
        <Header />
        <Skills />
        <Projects />
        <h1 className='text-black font-bold'>Seja bem vindo! :)</h1>
        <p>Desafio de apresentação Pessoal do Projeto Frontend fusion</p>
        <Footer />
      </main>
    </>
  );
}

export default App
