import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getGists, getGistsByName } from "../store/gists";
import { Input, InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
// const URL = "https://api.github.com/gists/public?page=10";

const InputStyles = styled(Input)({
  color: "#000",
  padding: "5px 1px",
  fontSize: "20px",
  svg: {
    fill: "#275179",
  },
});

const serchGistsDebounce = debounce((query, dispatch) => {
  dispatch(getGistsByName(query));
}, 1000);

export const GistsPage = () => {
  const [value, setValue] = useState("bogdanq");
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
  const { gistsByName, errorByName, pendingByName } = useSelector(
    (state) => state.gists
  );

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    serchGistsDebounce(value, dispatch);
  }, [value, dispatch]);

  const send = () => {
    if (!!value) {
      dispatch(getGistsByName(value));
    }
  };
  // if (error) {
  //   return (
  //     <div>
  //       <h1>error!!!</h1>
  //     </div>
  //   );
  // }
  // if (pending) {
  //   return (
  //     <div>
  //       <h1>isLoading....</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Gists page</h1>

      <div className="wrapperGists">
        <div className="wraper-gists">
          <div>
            {Array.from({ length: 10 })
              .map((_, ind) => ind + 1)
              .map((item) => (
                <button onClick={() => dispatch(getGists(item))} key={item}>
                  {item}
                </button>
              ))}
          </div>
          {error && (
            <h2>
              error:${error.message}:${error.code}
            </h2>
          )}
          {pending && <h1>is loading</h1>}
          {gists.map((gists, ind) => (
            <div key={ind}>
              <h2>{gists.description || "no description..."}</h2>
              <hr />
            </div>
          ))}
        </div>

        <div className="wraper-gists">
          <div>
            <input
              placeholder="search"
              value={value}
              onChange={(e) => e.target.value}
            />
            <InputStyles
              placeholder="enter name gists"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              label="Message"
              fullWidth={true}
              variant="outlined"
              endAdornment={
                <InputAdornment position="end">
                  {value && <button onClick={send}>send</button>}
                </InputAdornment>
              }
            />
          </div>
          {errorByName && (
            <h2>
              error:${errorByName.message}:${errorByName.code}
            </h2>
          )}
          {pendingByName && <h1>is loading</h1>}
          {gistsByName.map((gistsByName, ind) => (
            <div key={ind}>
              <h2>{gistsByName.description || "no description..."}</h2>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
