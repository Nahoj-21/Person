import './App.css';
import Person from './Person/Person';

function App() {

  const clickHandler = () => {
    console.log("Bouton cliqué");
  }
  return (
    <div className="App">
                <h1>Hello, mon appli REACT !</h1>
          <p>Ma première appli :</p>
      <Person nom="Marc" age="15 ans" click={clickHandler}>Je suis au GRETA</Person>
      <Person nom="Fred" age="44 ans"/>
      <Person nom="Gaëlle" age="22 ans"/>
      <Person nom="Philippe" age="39 ans"/>
      <Person nom="Johan" age="36 ans"/>
    </div>
  );
}

export default App;
