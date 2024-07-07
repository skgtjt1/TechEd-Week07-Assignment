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
            <div className="left-posts">
              <p>
                <span className="titles">Username: </span> {item.username}
              </p>
              <p>
                <span className="titles">Expansion:</span> {item.exp_name}
              </p>
              <p>
                <span className="titles">Review: </span> <br />{" "}
                {item.review_text}
              </p>
              <p>
                <span className="titles">User Rating: </span>
                {item.user_rating}
              </p>
            </div>
            <div className="right-posts">
              <img
                className="exp-image"
                src={item.image_url}
                alt={`Cover image for ${item.exp_name}`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
