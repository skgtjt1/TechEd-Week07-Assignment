import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/userreviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      // console.log(data);
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <br />
      <h2>User Reviews</h2>
      <br />
      <div className="main-posts">
        {posts.map((item) => (
          <div className="posts-div" key={item.id}>
            <p>Username: {item.username}</p>
            <p>Review: {item.review_text}</p>
            <p>User Rating: {item.user_rating}</p>
            <p>Expansion: {item.exp_name}</p>
            <img
              className="exp-image"
              src={item.image_url}
              alt={`Cover image for ${item.exp_name}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
