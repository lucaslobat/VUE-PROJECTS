import express from "express"
import cors from "cors";
import * as Dotenv from "dotenv";
import {getJson} from "serpapi";

const app = express();
const port = 3000;


app.use(cors());


Dotenv.config();
const API_KEY = process.env.API_KEY;

app.get('/api', (req, res) => {
    const params = {
      engine: "google_scholar",
      q:"Biology",
      api_key: API_KEY
    };
  
    getJson(params, (result) => {
      res.json(result["organic_results"]);
    });
  });

app.listen(port, () => {
    console.log(`El servidor está corriendo en http://localhost:${port}`)
})
