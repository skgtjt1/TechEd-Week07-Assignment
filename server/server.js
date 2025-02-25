import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors());

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`The server is up on ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "This is the root route." });
});

app.get("/userreviews", async (req, res) => {
  const result = await db.query(
    `SELECT reviews.id, 
  reviews.username, 
  reviews.review_text, 
  reviews.user_rating, 
  expansions.exp_name,
  expansions.image_url 
FROM 
  reviews 
JOIN 
  expansions 
ON 
  reviews.expansion_id = expansions.id;`
  );

  res.json(result.rows);
  // console.log(result.rows);
});

app.post("/postreview", async (req, res) => {
  const { username, reviewText, userRating, expansion } = req.body;

  try {
    await db.query(
      `INSERT INTO reviews (username, review_text, user_rating, expansion_id) VALUES ($1, $2, $3, $4)`,
      [username, reviewText, userRating, expansion]
    );
  } catch (error) {
    console.log("post failed, error");
    console.log(body);
    res.status(500).json({ success: false });
  }
});

// app.get("/", async function (req, res) {
//   const result = await db.query(`SELECT name, calories FROM biscuits`);

//   res.json(result.rows);
// });

// app.put("/updateFormData/:id", async (req, res) => {
//   const dataId = req.params.id;
//   const result = await db.query(
//     `UPDATE tablename SET column_name = $1, second_column = $2 WHERE id = $3 RETURNING * `, [$1, $2, dataId] //dataId is passed from the
//   )
//   res.json(result.rows);
// });

// app.delete("/deleteFormData/:id", async (req, res) => {
//   const id = reqparams.id;
//   const result = await db.query(
//     ` DELETE FROM table_name WHERE id = $1 RETURNING *,`[id]
//   );
//   res.json(result.rows);
// });
