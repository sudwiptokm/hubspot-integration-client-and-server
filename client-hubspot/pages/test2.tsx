import axios from "axios";
import React, { useEffect } from "react";

export default function Test2() {
  const token = "pat-na1-eea2bc6a-9531-4cd7-add5-a006df5ff2c3";
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  useEffect(() => {
    axios
      .get("https://api.hubapi.com/crm/v3/objects/contacts", { headers })
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return <div>test2</div>;
}
