import './App.css'
import MainComponent from './components/MainComponent'
import ClassComponent from './components/ClassComponent'

// Questo potrebbe sembrare HTML, ma in realtà è una sintassi simile chiamata
// JSX

// differenze principali tra JSX e HTML:
// - le classi CSS si applicano con la parola "className" e NON "class"
// - si possono interpolare le variabili semplicemente con {}
// - onclick, onsubmit etc. diventano onClick, onSubmit etc.

const myName = 'Stefano'

// nella sua forma più semplice, un componente React può benissimo essere una funzione che ritorna del JSX

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PRIMO PROGETTO REACT di {myName}</h1>
        {/* monto ClassComponent */}
        <ClassComponent label="CLICCAMI 1" />
        <ClassComponent label="CLICCAMI 2" />
        <img src="cat.jpg" alt="kitten" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CIAO EPICODE!
        </a>
      </header>
      <main>
        {/* qua vorrei montare il componente MainComponent! */}
        <MainComponent student="Stefano" color="red" />
        <MainComponent student="Giulio" color="green" />
        <MainComponent student="Omar" color="violet" />
      </main>
    </div>
  )
}

export default App
