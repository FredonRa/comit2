import './css/App.css';
import Header from './components/Header'
import Reloj from './components/Reloj';
import Table from './components/Table'
import Section from './components/Form';
// import NombreUsuario from './components/Usuario'
// import Jsx from './components/Contador'
// import Lista from './components/Lista'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Reloj/>
      <Table/> */}
      {/* <NombreUsuario nombre={'Federico'}  /> */}
      <Section />
    </div>
  );
}

export default App;
