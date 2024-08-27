"use client";
import React from "react";

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  let data = await response.json();
  return data;
}

export default async function Post() {
  const data = await fetchData();
  return (
    <div>
      <h1>Danh sách Bài Viết (SSR)</h1>
      <ul>
        {data?.map((post: any) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
}
