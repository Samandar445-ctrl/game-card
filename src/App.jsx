import GameCard from "./gamecard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Мои любимые игры</h1>
      <div className="cards">
        <GameCard title="Minecraft" emoji="⛏️" rating="9.5" />
        <GameCard title="The Witcher 3" emoji="⚔️" rating="9.8" />
        <GameCard title="FIFA 24" emoji="⚽" rating="8.7" />
      </div>
    </div>
  );
}

export default App;