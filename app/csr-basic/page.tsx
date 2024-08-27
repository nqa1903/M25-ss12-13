"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users , setUsers] = useState<any>([]);
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        }
        fetchData();
    },[])
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {users?.map((user:any)=>(
            <li>{user.username}</li>
        ))}
      </ul>
    </div>
  )
}
