import React, { useState, createContext } from "react";

export const LikeContext = createContext();

function LikeContextProvider(props) {
  const [likes, setLikes] = useState({});

  /*
  likes state will use post id as key and number of likes as value.

  the below expression check if an id is not present then create it with value 1
  otherwise just increament by 1
  */
  const addLike = (id) => {
    if (likes[id] === undefined) setLikes({ ...likes, [id]: 1 });
    else setLikes({ ...likes, [id]: likes[id] + 1 });
  };

  /**
   * this Context Provider is put in App.js to provide a global context
   */
  return (
    <LikeContext.Provider value={{ likes, addLike }}>
      {props.children}
    </LikeContext.Provider>
  );
}

export default LikeContextProvider;
