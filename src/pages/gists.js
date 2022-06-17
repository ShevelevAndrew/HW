import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../store/gists";
// const URL = "https://api.github.com/gists/public?page=10";

export const GistsPage = () => {
  // const [gists, setGists] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const getGists = async () => {
  //   try {
  //     setIsLoading(true);
  //     const result = await fetch(URL);
  //     const data = await result.json();

  //     if (result.status === 200) {
  //       setGists(data);
  //     } else {
  //       setError("error");
  //     }
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getGists();
  // }, []);
  const dispatch = useDispatch();
  const { gists, error, pending } = useSelector((state) => state.gists);

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        <h1>error!!!</h1>
      </div>
    );
  }
  if (pending) {
    return (
      <div>
        <h1>isLoading....</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Gists page</h1>
      {Array.from({ length: 10 })
        .map((_, ind) => ind + 1)
        .map((item) => (
          <button onClick={() => dispatch(getGists(item))} key={item}>
            {item}
          </button>
        ))}
      {gists.map((gists, ind) => (
        <div key={ind}>
          <h2>{gists.description || "no description..."}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};
