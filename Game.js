import React, {useState} from 'react';
import BoardGame from './BoardGame';
import Button from '@material-ui/core/Button';

const style = {
    width: '200px',
    margin: '20px auto',
};
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}
const Game = () => {
    const [BoardGame, setBoardGame] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(BoardGame);

    const handleClick = i => {
        const BoardGameCopy = [...BoardGame];
        if(winner || BoardGameCopy[i]) return;
        BoardGameCopy[i] = xIsNext ? 'X' : 'O';
        setBoardGame(BoardGameCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <Button variant="contained" color="primary" onClick={() => setBoardGame( Array(9).fill(null) )}>
            Start Game
        </Button>
    )

    return (
        <>
            <BoardGame squares={BoardGame} onClick={handleClick} />
                <div style={style}>
                    <p> 
					{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
					</p>
                    {renderMoves()}
                </div>
        </>
    )
}

export default Game;