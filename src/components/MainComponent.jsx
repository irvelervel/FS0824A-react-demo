// questo file è il nostro primo componente React creato da noi!

const MainComponent = function (props) {
  // ritorniamo del JSX
  return (
    <section className={props.color}>
      <h3>Componente React creato da me!</h3>
      <p>Diamo il benvenuto a {props.student}</p>
    </section>
  )
}

export default MainComponent
// esport questo componente per renderlo disponibile agli altri file JS/JSX

// PROPS
// Le props sono FONDAMENTALI per DINAMICIZZARE i componenti
// ovvero renderli compatibili con dei "parametri"
// "props" è UN OGGETTO, che conterrà TUTTE le prop che state passando
// a quel componente!
