import { useEffect, useState } from "react";

const URL = "https://api.github.com/gists/public?page=10";

export const GistsPage = () => {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getGists = async () => {
    try {
      setIsLoading(true);
      const result = await fetch(URL);
      const data = await result.json();

      if (result.status === 200) {
        setGists(data);
      } else {
        setError("error");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getGists();
  }, []);

  if (error) {
    return (
      <div>
        <h1>error!!!</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <h1>isLoading....</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Gists page</h1>
      {gists.map((gists, ind) => (
        <div key={ind}>
          <h2>{gists.description || "no description..."}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};
