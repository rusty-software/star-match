import { Game } from "./components/Game";
import { useState } from "react";

export const StarMatch = () => {
  const [gameId, setGameId] = useState(42);
  return <Game key={gameId} newGame={() => setGameId(gameId + 1)} />;
};
