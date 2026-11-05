import { useState, useEffect } from "react";

function GameCard({ title, emoji, rating }) {
  const [likes, setLikes] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Один раз при первом появлении карточки
  useEffect(() => {
    console.log("Карточка появилась");
  }, []);

  // При каждом изменении likes обновляем заголовок вкладки
  useEffect(() => {
    document.title = `${likes} like`;
  }, [likes]);

  return (
    <div className="game-card">
      <div className="game-card__emoji">{emoji}</div>
      <h2 className="game-card__title">{title}</h2>
      <p className="game-card__rating">⭐ Рейтинг: {rating}</p>

      <div className="game-card__actions">
        <button
          className="game-card__btn"
          onClick={() => setLikes(likes + 1)}
        >
          👍 {likes}
        </button>

        <button
          className={
            isFavorite
              ? "game-card__btn game-card__btn--active"
              : "game-card__btn"
          }
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? "⭐ В избранном" : "⭐ В избранное"}
        </button>
      </div>
    </div>
  );
}

export default GameCard;