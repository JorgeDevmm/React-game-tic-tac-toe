import { useState } from 'react';
import Header from './Header';
import Tablero from './Tablero';

const TURNO = {
  x: 'x',
  o: 'O',
};

function App() {
  // array que dibuja la tablero
  const [board, setBoard] = useState(Array(9).fill(null));

  // state del turno
  const [turno, setTurno] = useState(TURNO.x);

  return (
    <>
      <Header />
      <main className='board'>
        <h2>Tic tac toe</h2>
        <section className='game'>
          {board.map((_, index) => {
            return <Tablero key={index} index={index}></Tablero>;
          })}
        </section>

        <section className='turn'>
          <Tablero isSelected={turno === TURNO.x}>{TURNO.x}</Tablero>
          <Tablero isSelected={turno === TURNO.o}>{TURNO.o}</Tablero>
        </section>
      </main>
    </>
  );
}

export default App;
