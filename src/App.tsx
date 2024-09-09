import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=105838db2dd441ef9d6b6f7a76693869`)
      .then((response) => response.json())
      .then((data) => setGames(data.results))
      .catch(() => setError("Failed to fetch games"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Games</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {games.map((game) => (
          <div 
            key={game.id} 
            style={{
              border: '1px solid #ccc',
              padding: '16px',
              margin: '8px',
              width: '200px',
              textAlign: 'center'
            }}
          >
            <img src={game.background_image} alt={game.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;