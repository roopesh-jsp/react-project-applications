import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  async function getData() {
    setLoading(true);
    const res = await axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get",
      params: {
        _page: page,
        _limit: 10,
      },
    });
    setData((prev) => [...prev, ...res.data]);
    console.log(res.data);

    setLoading(false);
  }
  async function handleNewPageLoad() {
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.documentElement.scrollTop);
    // console.log(window.innerHeight);
    try {
      if (
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
        // check for hasMore !! ??
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleNewPageLoad);
  }, []);
  return (
    <div>
      {data.map((ele, idx) => {
        return (
          <div key={idx} className="card">
            <h1>{ele.title}</h1>
            <p>{ele.body}</p>
            <span>user :{ele.userId}</span>
          </div>
        );
      })}
      {loading && <h1 className="loading">loading....</h1>}
    </div>
  );
}
