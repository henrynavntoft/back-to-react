import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"


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
   <div className="p-4">
  <h1 className="text-center text-4xl font-bold mb-8">Games</h1>
  <div className="grid grid-cols-3 gap-6">
    {games.map((game) => (
      <div
        key={game.id}
        className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg p-4 transition-transform hover:scale-105"
      >
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">{game.name}</h3>
          <div className="mt-2">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Click me
            </Button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default App;