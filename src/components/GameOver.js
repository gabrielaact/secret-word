import './GameOver.css'

const Game = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim do Jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default Game 