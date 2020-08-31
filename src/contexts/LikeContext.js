import React, { useState, createContext } from "react";

export const LikeContext = createContext();

function LikeContextProvider(props) {
  const [likes, setLikes] = useState({});

  const addLike = (id) => {
    if (likes[id] === undefined) setLikes({ ...likes, [id]: 1 });
    else setLikes({ ...likes, [id]: likes[id] + 1 });
  };

  return (
    <LikeContext.Provider value={{ likes, addLike }}>
      {props.children}
    </LikeContext.Provider>
  );
}

export default LikeContextProvider;
