import React from 'react'

async function fetchData(id:string){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!res.ok){
        throw new Error("Failed to fetch data");
    }
    let data = res.json();
    return data;
}

interface PageProps{
    params : {id:string}
}

export default async function page({params}:PageProps) {
    const data = await fetchData(params.id);
  return (
    <div>
      <h1>Chi tiết bài viết</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  )
}
