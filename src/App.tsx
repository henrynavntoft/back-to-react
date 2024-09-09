import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


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