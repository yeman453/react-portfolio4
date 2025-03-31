import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeContextProvider from './context/ThemeContext'
import Jsprojects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark');
  //   } else {
  //     document.body.classList.remove('dark');
  //   }
  // }, [darkMode]);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        {/* <ThemeContextProvider> */}
        <div ></div>
        <Navbar  />
        <Hero  />
        <About />
        <Services />
        <Projects />
        {/* <Jsprojects /> */}
        <Contact />
        <Footer />
        {/* </ThemeContextProvider> */}
      </div>
    </>
  )
}

export default App
