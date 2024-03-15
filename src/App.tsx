import { useEffect, useState } from "react";
import './App.css';
import BoardCompanent from './components/BoardComponent';
import { Boards } from './modals/Boards';

function App() {
  const [board, setBoard] = useState(new Boards())

  useEffect(() => {
    restart()
  }, [])
  
  function restart() {
    const newBoard = new Boards();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className='app'>
      <BoardCompanent
        board={board}
        setBoard={setBoard}/>
    </div>
  );
}

export default App;
