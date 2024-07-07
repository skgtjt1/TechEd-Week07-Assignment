import { useState } from "react";

// export default function Form() {
//declare useState to track the input value
//the initial value is an empty string because the type of the inputs is text
//we need to link the state variables to the corresponding input using the value attribute
// const [username, setUsername] = useState("");
// const [testimonial, setTestimonial] = useState("");

export default function Form() {
  const [formValues, setFormValues] = useState({
    username: "",
    expansion: "",
    reviewText: "",
    userRating: "",
    // karma: "",
  });

  //this function controls the onSubmit event
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("the form values are:", formValues);

    const response = await fetch("http://localhost:8080/postreview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    console.log(data);
  }

  //these functions control the input changes with the onChange event
  //I think this keeps the state updated on every change to make suer hte most up to date version is sent to server
  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  return (
    <>
      <h1>Form</h1>
      {/* we add the handleSubmit to the form in an onSubmit event */}
      <form className="form" onSubmit={handleSubmit}>
        {/* our classic for attribute is now called htmlFor. They are the same thing */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          placeholder="Username"
          required
          //   we added the onChange event, so when the user types, the handleChange updates the value of the corresponding state variable
          onChange={handleInputChange}
        />

        <label htmlFor="expansion">Expansion</label>
        <select
          name="expansion"
          value={formValues.expansion}
          required
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select
          </option>
          <option value={1}>Final Fantasy XIV 1.0</option>
          <option value={2}>A Realm Reborn</option>
          <option value={3}>Heavensward</option>
          <option value={4}>Stormblood</option>
          <option value={5}>Shadowbringers</option>
          <option value={6}>Endwalker</option>
          <option value={7}>Dawntrail</option>
        </select>
        <label htmlFor="review">User Review</label>
        <textarea
          type="text"
          name="reviewText"
          value={formValues.reviewText}
          placeholder="Write your review!"
          required
          id="textarea"
          //   we added the onChange event, so when the user types, the handleChange updates the value of the corresponding state variable
          onChange={handleInputChange}
        />

        <label htmlFor="user_rating">User Rating</label>
        <input
          type="number"
          name="userRating"
          value={formValues.userRating}
          required
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

// function handleChange() {

// return() }

//we need the values from the initial state
//we need to set the properties for the new object
//the key is the target name the value is the target value

//We need state to save the form data (as a whole form)
//formData = {
// key: value,
// key: value,
// key: value,

//need a handleSubmit function

// function handleSubmit() {

//need to prevent default form function
//something to fetch the POST endpoint
// fetch("url",
// {
// method:
// body:
// headers: { "content/type" : "application/json"

// }

//a function to handle the changes of the user input - go find
