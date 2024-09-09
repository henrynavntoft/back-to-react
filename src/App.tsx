import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import axios from "axios";

const APIClient = axios.create({ 
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY
  }
});


interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect (() => {
    APIClient.get<GameResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch(() => setError("Failed to fetch games"))
      .finally(() => setLoading(false));
  }
  , []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
   <>
      
      <div className="p-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((game) => (
            <Card key={game.id} className="transition-transform hover:scale-105">
              <CardHeader>
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{game.name}</CardTitle>
                <CardDescription>Game description or details here</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant={"outline"}>Click me</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;