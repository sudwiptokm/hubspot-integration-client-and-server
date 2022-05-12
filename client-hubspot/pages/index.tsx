import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function run() {
      await axios
        .get("http://localhost:5000/update?email=tajwar721@gmail.com")
        .then((res) => {
          console.log(res.data.results);
          setData(res.data.results);
        });
    }
    run();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <div>
        {data.length != 0 &&
          data.map((x) => <p key={x.id}>{x.properties.firstname}</p>)}
      </div>
    </div>
  );
};

export default Home;
