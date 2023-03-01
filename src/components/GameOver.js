import './GameOver.css'

const Game = ({ retry }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default Game 