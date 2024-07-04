# Build a database driven React app

## Overview

- Putting together the React client code, Node.js server code and Postgres database to build a full stack React application.

### Example App (super beautiful)

### User Stories

- 🐿️ As a user, I want to be able to create new posts and add them to the page
- 🐿️ As a user, I want to be able to assign a category to each post
- 🐿️ As a user, I want to be able to view all posts added on the page and the category they're in
- 🐿️ As a user, I want to be able to view all posts in a specific category by visiting a dedicated page for that category (Stretch Goal)
- 🐿️ As a user, I want to be able to add new categories (Stretch Goal)

## Requirements

### Make in the order:

1. Database (Supabase),
2. Server (Express),
3. Client (React)

## Remember to create 2 folders in your project root. One named "server" and one named "client".

- 🎯 Design a database schema with relationships between tables
- 🎯 Create a new application with a React client and an Express server
  (again, remember the client and the server should be separate)
- 🎯 Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file. (if you use the Supabase editor, save the scripts you run in a file in your project, in case you need to rerun them, or we need to duplicate the project)
- 🎯 Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application.
- 🎯 Create multiple pages using react-router-dom
- 🎯 Create a home page.
- 🎯 Create a page to show all the posts and use fetch to call your server to get your data.
- 🎯 Create a page where users can create new posts using a form.

## Stretch Goals

- 🏹 Allow users to "Like" posts and increase the likes
- 🏹 Allow users to DELETE posts
- 🏹 Allow users to filter posts in a specific category. Use either a query string like /posts?category=education or a dedicated route for the categories at /posts/:categoryName.

## Please also provide an assignment reflection in your project README.md file. (Required)

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

### (Optional)

🏹 Feel free to add any other reflections you would like to share about your submission e.g.

What went really well and what could have gone better?
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.
Requesting feedback about a specific part of your submission.
