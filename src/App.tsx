import { useEffect, useState } from "react";
import { GreetFunction } from "./hooks/useGreet";

export default function App() {
  const [greet, setGreet] = useState<((name: string) => string) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGreetFunction = async () => {
      const greetFunction = await GreetFunction();
      setGreet(() => greetFunction);
      setLoading(false);
    };

    loadGreetFunction();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1 className="font-bold">
          {greet ? greet("World") : "Error: greet function not found"}
        </h1>
      )}
    </>
  );
}
