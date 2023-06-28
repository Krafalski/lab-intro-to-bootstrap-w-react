import React from "react";
import { useState, useEffect } from "react";

import Nav from "./Nav";
import Hero from "./Hero";
import Search from "./Search";
import Footer from "./Footer";

import PostsIndex from "./Posts/Index";

import postData from "./data/posts.json";

function App() {
  const [posts, setPosts] = useState({ all: postData, filtered: postData });
  const [search, setSearch] = useState("");

  useEffect(() => {
    const term = search.toLowerCase();
    const filtered = postData.filter((post) => {
      return (
        post.location.toLowerCase().includes(term) ||
        post.title.toLowerCase().includes(term)
      );
    });

    if (filtered.length !== posts.filtered.length) {
      setPosts({ ...posts, filtered });
    }
  }, [posts, search]);

  return (
    <main>
      <Nav />
      <Hero />
      <Search search={search} handleSearch={setSearch} />
      <PostsIndex search={search} posts={posts} />
      <Footer />
    </main>
  );
}

export default App;
