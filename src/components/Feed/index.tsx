import React, { useState, useEffect } from "react";
import api from "./../../config/api";
import Piu from "./../Piu";
import { PiuProps } from "./../Piu";

function Feed() {
  const [pius, setPius] = useState<PiuProps[]>([]);

  useEffect(() => {
    async function getPiu() {
      const response = await api.get("/pius");
      setPius(response.data);
      console.log(response.data);
    }
    getPiu();
  }, []);

  return (
    <>
      {pius.map((piu) => (
        <Piu
          user={piu.user}
          key={piu.id}
          id={piu.id}
          text={piu.text}
          likes={piu.likes}
          created_at={piu.created_at}
          updated_at={piu.updated_at}
        />
      ))}
    </>
  );
}

export default Feed;
