function GameCard({ title, emoji, rating }) {
  return (
    <div className="game-card">
      <div className="game-card__emoji">{emoji}</div>
      <h2 className="game-card__title">{title}</h2>
      <p className="game-card__rating">⭐ Рейтинг: {rating}</p>
    </div>
  );
}

export default GameCard;