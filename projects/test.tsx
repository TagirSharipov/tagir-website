import React, { useEffect, useState } from 'react';

import './App.css';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Posts = {
  userId: string;
  posts: Post[]
}[];

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');

      const data = (await res.json()) as Post[];
      setPosts(data);

      const userPostsMap: { [key: string]: Post[] } = {};

      data.forEach((post) => {
        if (userPostsMap[post.userId])
          userPostsMap[post.userId] = [...userPostsMap[post.userId], post];
        else userPostsMap[post.userId] = [post];
      });

      const resArray = Array.fp(([userId, posts]) => ({
        userId,
        posts,
      }));


      console.log(resArray);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //jsonplaceholder.typicode.com/posts

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
