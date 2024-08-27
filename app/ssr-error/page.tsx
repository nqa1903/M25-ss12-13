import React from "react";

async function fetchData() {
  try {
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent-url"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    let data = await res.json();
    return { data };
  } catch (error) {
    return { error: "Xảy ra lỗi khi lấy dữ liệu: posts.map is not a function" };
  }
}

// Page component
export default async function PageError() {
  const result = await fetchData();
  if (result.error) {
    return (
      <div>
        <h1>Xử lý lỗi với SSR</h1>
        <p className="text-red-500">{result.error}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Xử lý lỗi với SSR</h1>
      <ul>
        {result.data.map((post: any) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
}
