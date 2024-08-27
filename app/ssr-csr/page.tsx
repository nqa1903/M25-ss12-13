"use client";
import React, { useState, useEffect } from "react";

async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Fetching data failed");
  }
  let data = await res.json();
  return data;
}

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={loadData} disabled={loading}>
        {loading ? "Loading..." : "Refresh"}
      </button>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body.slice(0, 100)}...</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
