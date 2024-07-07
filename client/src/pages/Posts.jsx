//Here I will fetch the posts from the server which is geting the posts from the database

// import { useEffect } from "react";

export default function Posts() {
  //we need state to save the values of posts
  //we need useEffect to fetch the data

  // useEffect();
  //we need a function to get the posts
  //this function is async and uses fetch
  //once you fetch the data, //! you will set the state variable to be the posts data

  //you can have a separate function to get the posts and call the function in the useEffect hook or you can write the function diretly inside the useEffect
  return (
    <>
      Posts <img src="https://picsum.photos/200/300" alt="" />
    </>
  );
  //you could have a list of post titles and have the user click to see the full review
}
