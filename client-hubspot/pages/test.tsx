import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/update?email=tajwar721@gmail.com")
      .then((res) => res.data)
      .then((data) => {
        setData(data.properties);
      });
  }, []);

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    axios.post("http://localhost:5000/update?email=tajwar721@gmail.com", {
      newVal: e.target.food_name.value,
    });
    console.log(e.target.food_name.value);
  };

  return (
    <div>
      <div>
        <p>Welcome to the Fav Food Page</p>
        <p>
          {data.email}'s favorite food is {data.fav_food}
        </p>
      </div>
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter New Food" name="food_name" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
